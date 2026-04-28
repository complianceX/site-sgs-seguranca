import { z } from "zod";

/**
 * Padrões de validação rigorosos para conformidade com LGPD e prevenção de spam.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-\s.]{8,30}$/;
const TURNSTILE_TIMEOUT_MS = 7000;

export type LeadSource = "contact" | "newsletter" | "resource";

/**
 * Esquema Zod para validação de Leads.
 * Substitui a validação manual anterior por uma abordagem declarativa e segura.
 */
export const LeadSchema = z.object({
  source: z.enum(["contact", "newsletter", "resource"], {
    error_map: () => ({ message: "Origem da solicitação inválida." }),
  }),
  email: z.string().email("E-mail inválido.").trim().toLowerCase(),
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres.").max(120).optional().or(z.literal("")),
  company: z.string().max(150, "Nome da empresa muito longo.").optional().or(z.literal("")),
  whatsapp: z.string().regex(PHONE_PATTERN, "Formato de WhatsApp inválido.").optional().or(z.literal("")),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres.").max(2000).optional().or(z.literal("")),
  resourceTitle: z.string().max(160).optional().or(z.literal("")),
  honeypot: z.string().optional(),
  turnstileToken: z.string().max(2048, "Token de verificação inválido.").optional(),
}).refine((data) => {
  // Validação condicional para contato direto
  if (data.source === "contact") {
    return !!(data.name && data.company && data.whatsapp && data.message);
  }
  return true;
}, {
  message: "Preencha todos os campos obrigatórios para contato.",
  path: ["source"],
}).refine((data) => {
  // Validação condicional para recursos
  if (data.source === "resource") {
    return !!data.resourceTitle;
  }
  return true;
}, {
  message: "Título do material solicitado é obrigatório.",
  path: ["resourceTitle"],
}).refine((data) => !data.honeypot, {
  message: "Solicitação bloqueada por suspeita de spam.",
  path: ["honeypot"],
});

export type LeadPayload = z.infer<typeof LeadSchema>;

/**
 * Esquema legado mantido por compatibilidade, agora migrado para Zod.
 */
export const ContactSchema = LeadSchema.extend({
  source: z.literal("contact"),
});

type TurnstileResult = {
  success: boolean;
  bypassed?: boolean;
  reason?: string;
};

function withTimeout(ms: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  return { controller, timeout };
}

/**
 * Verifica o token do Cloudflare Turnstile com timeout e tratamento de erros.
 */
export async function verifyTurnstile(token: string | undefined, remoteIp?: string): Promise<TurnstileResult> {
  const isProduction = process.env.NODE_ENV === "production";
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!token) {
    if (!isProduction && !secret) {
      return { success: true, bypassed: true, reason: "development_missing_turnstile" };
    }
    return { success: false, reason: "missing_token" };
  }

  if (!secret) {
    return { success: false, reason: "missing_secret" };
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (remoteIp) formData.append("remoteip", remoteIp);

  const { controller, timeout } = withTimeout(TURNSTILE_TIMEOUT_MS);
  try {
    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: formData,
        method: "POST",
        signal: controller.signal,
        cache: "no-store",
      }
    );
    const outcome = (await result.json()) as { success?: boolean; "error-codes"?: string[] };
    return {
      success: outcome.success === true,
      reason: outcome.success === true ? undefined : outcome["error-codes"]?.join(","),
    };
  } catch {
    return { success: false, reason: "verification_error" };
  } finally {
    clearTimeout(timeout);
  }
}
