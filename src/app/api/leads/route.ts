import { NextResponse } from "next/server";

import { rateLimit } from "@/lib/rate-limit";
import { sanitizeEmailSubject, sanitizeText } from "@/lib/sanitize";

export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadSource = "contact" | "resource" | "newsletter";

type LeadPayload = {
  source: LeadSource;
  name?: string;
  company?: string;
  email: string;
  whatsapp?: string;
  message?: string;
  resourceTitle?: string;
  honeypot?: string;
};

type ValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; error: string };

function textField(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const sanitized = sanitizeText(value).slice(0, maxLength);
  return sanitized.length > 0 ? sanitized : undefined;
}

function validateLeadPayload(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object") {
    return { success: false, error: "Payload inválido." };
  }

  const data = payload as Record<string, unknown>;
  const source = data.source;

  if (source !== "contact" && source !== "resource" && source !== "newsletter") {
    return { success: false, error: "Origem inválida." };
  }

  const email = textField(data.email, 160)?.toLowerCase();
  if (!email || !EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Informe um e-mail válido." };
  }

  const honeypot = textField(data.honeypot, 200);
  if (honeypot) {
    return { success: false, error: "Solicitação inválida." };
  }

  const lead: LeadPayload = {
    source,
    email,
    name: textField(data.name, 120),
    company: textField(data.company, 150),
    whatsapp: textField(data.whatsapp, 40),
    message: textField(data.message, 1800),
    resourceTitle: textField(data.resourceTitle, 160),
  };

  if (source === "contact") {
    if (!lead.name || !lead.company || !lead.whatsapp || !lead.message) {
      return { success: false, error: "Preencha todos os campos obrigatórios." };
    }
  }

  if (source === "resource" && !lead.resourceTitle) {
    return { success: false, error: "Material não informado." };
  }

  return { success: true, data: lead };
}

async function forwardLead(lead: LeadPayload, referenceId: string) {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) return "local" as const;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "sgs-institutional-site/1.0",
    },
    body: JSON.stringify({
      referenceId,
      submittedAt: new Date().toISOString(),
      lead,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed with status ${response.status}`);
  }

  return "webhook" as const;
}

export async function POST(request: Request) {
  const referenceId = crypto.randomUUID();
  const rateLimitResult = await rateLimit(8, 10 * 60 * 1000);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Muitas tentativas. Tente novamente em alguns minutos.",
        referenceId,
      },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "JSON inválido.", referenceId },
      { status: 400 }
    );
  }

  const validation = validateLeadPayload(payload);
  if (!validation.success) {
    return NextResponse.json(
      { success: false, error: validation.error, referenceId },
      { status: 400 }
    );
  }

  try {
    const delivery = await forwardLead(validation.data, referenceId);
    const subject = sanitizeEmailSubject(`Lead SGS ${validation.data.source} ${referenceId}`);

    return NextResponse.json({
      success: true,
      referenceId,
      delivery,
      fallbackEmail: "contato@sgsseguranca.com.br",
      fallbackSubject: subject,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Não foi possível registrar sua solicitação agora.",
        referenceId,
      },
      { status: 502 }
    );
  }
}
