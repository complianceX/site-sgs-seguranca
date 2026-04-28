import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeContactPayload, sanitizeEmailSubject } from "@/lib/sanitize";
import { LeadSchema, verifyTurnstile, type LeadPayload } from "@/lib/security";
import { logSecurityEvent } from "@/lib/security-logger";
import { 
  assertLeadRuntimeConfig, 
  getAllowedOrigins, 
  getLeadWebhookUrl, 
  getLeadWebhookSecret, 
  getSiteOrigin, 
  isProductionRuntime 
} from "@/lib/env";

type LeadResponse = {
  success: boolean;
  error?: string | object;
  referenceId?: string;
  delivery?: "webhook" | "local";
  fallbackEmail?: string;
  fallbackSubject?: string;
};

const LEAD_RATE_LIMIT = 8;
const LEAD_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 16 * 1024;
const WEBHOOK_TIMEOUT_MS = 8000;
const FALLBACK_EMAIL = "contato@sgsseguranca.com.br";

function buildFallbackSubject(lead: LeadPayload) {
  const labels: Record<LeadPayload["source"], string> = {
    contact: "Contato comercial",
    newsletter: "Newsletter técnica",
    resource: "Solicitação de recurso",
  };

  return sanitizeEmailSubject(`SGS - ${labels[lead.source]}`);
}

type DeliveryResult = {
  ok: boolean;
  status?: number;
  configured: boolean;
};

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  // Em produção, deve-se confiar apenas no primeiro IP se estiver atrás de um Proxy conhecido
  return forwardedFor ? forwardedFor.split(",")[0]?.trim() : realIp ?? undefined;
}

async function forwardLead(lead: LeadPayload, referenceId: string): Promise<DeliveryResult> {
  const webhookUrl = getLeadWebhookUrl();
  const webhookSecret = getLeadWebhookSecret();
  
  if (!webhookUrl) return { ok: false, configured: false };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "X-SGS-Lead-Reference": referenceId,
    };

    // Reforço de segurança: Autenticação mútua via Bearer Token
    if (webhookSecret) {
      headers["Authorization"] = `Bearer ${webhookSecret}`;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        referenceId,
        receivedAt: new Date().toISOString(),
        lead,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    return { ok: response.ok, status: response.status, configured: true };
  } catch {
    return { ok: false, configured: true };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  const referenceId = crypto.randomUUID();

  try {
    const config = assertLeadRuntimeConfig(referenceId);
    if (!config.ok) {
      return NextResponse.json<LeadResponse>(
        {
          success: false,
          error: "Serviço temporariamente indisponível.",
          referenceId,
        },
        { status: 503, headers: { "X-Correlation-ID": referenceId } }
      );
    }

    const contentLength = Number(req.headers.get("content-length") ?? "0");
    if (contentLength > MAX_BODY_BYTES) {
      logSecurityEvent("LEAD_PAYLOAD_TOO_LARGE", {
        path: "/api/leads",
        referenceId,
      });

      return NextResponse.json<LeadResponse>(
        { success: false, error: "Tamanho excedido.", referenceId },
        { status: 413, headers: { "X-Correlation-ID": referenceId } }
      );
    }

    const rl = await rateLimit(LEAD_RATE_LIMIT, LEAD_WINDOW_MS);
    if (!rl.success) {
      logSecurityEvent("LEAD_RATE_LIMIT_EXCEEDED", {
        path: "/api/leads",
        referenceId,
      });

      return NextResponse.json<LeadResponse>(
        {
          success: false,
          error: "Limite de tentativas excedido. Tente mais tarde.",
          referenceId,
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
            "X-Correlation-ID": referenceId,
          },
        }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json<LeadResponse>(
        { success: false, error: "Dados inválidos.", referenceId },
        { status: 400, headers: { "X-Correlation-ID": referenceId } }
      );
    }

    // Refatoração: Uso de Zod para validação segura
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<LeadResponse>(
        { 
          success: false, 
          error: "Campos inválidos ou obrigatórios ausentes.", 
          referenceId 
        },
        { status: 400, headers: { "X-Correlation-ID": referenceId } }
      );
    }

    const turnstile = await verifyTurnstile(parsed.data.turnstileToken, getClientIp(req));
    if (!turnstile.success) {
      logSecurityEvent("LEAD_TURNSTILE_BLOCKED", {
        path: "/api/leads",
        referenceId,
        source: parsed.data.source,
        reason: turnstile.reason ?? "unknown",
      });

      return NextResponse.json<LeadResponse>(
        { success: false, error: "Verificação antiabuso falhou.", referenceId },
        { status: 403, headers: { "X-Correlation-ID": referenceId } }
      );
    }

    const safeLead = sanitizeContactPayload(parsed.data);
    const delivery = await forwardLead(safeLead, referenceId);

    if (!delivery.ok) {
      logSecurityEvent(delivery.configured ? "LEAD_WEBHOOK_FAILED" : "LEAD_WEBHOOK_MISSING", {
        path: "/api/leads",
        referenceId,
        source: safeLead.source,
        status: delivery.status ?? "unavailable",
      });

      if (isProductionRuntime()) {
        return NextResponse.json<LeadResponse>(
          {
            success: false,
            error: "Falha ao processar solicitação. Tente novamente.",
            referenceId,
          },
          { status: delivery.configured ? 502 : 503, headers: { "X-Correlation-ID": referenceId } }
        );
      }
    }

    return NextResponse.json<LeadResponse>(
      {
        success: true,
        referenceId,
        delivery: delivery.ok ? "webhook" : "local",
        fallbackEmail: delivery.ok ? undefined : FALLBACK_EMAIL,
        fallbackSubject: delivery.ok ? undefined : buildFallbackSubject(safeLead),
      },
      { headers: { "X-Correlation-ID": referenceId } }
    );
  } catch (err) {
    logSecurityEvent("LEAD_INTERNAL_ERROR", {
      path: "/api/leads",
      referenceId,
    });

    return NextResponse.json<LeadResponse>(
      {
        success: false,
        error: "Erro inesperado.",
        referenceId,
      },
      { status: 500, headers: { "X-Correlation-ID": referenceId } }
    );
  }
}

export function OPTIONS() {
  const origin = getSiteOrigin();
  const allowedOrigin = getAllowedOrigins().includes(origin) ? origin : "https://sgsseguranca.com.br";

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
