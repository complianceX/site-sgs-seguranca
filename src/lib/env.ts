import { logSecurityEvent } from "@/lib/security-logger";

const PROD = process.env.NODE_ENV === "production";

type RuntimeEnvIssue = {
  key: string;
  severity: "error" | "warning";
  message: string;
};

function hasValue(value: string | undefined) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isProductionRuntime() {
  return PROD;
}

export function getLeadWebhookUrl() {
  const value = process.env.LEADS_WEBHOOK_URL?.trim();
  return value && value.startsWith("https://") ? value : undefined;
}

export function getLeadWebhookSecret() {
  return process.env.LEAD_WEBHOOK_SECRET?.trim();
}

export function getSiteOrigin() {
  return process.env.SITE_ORIGIN?.trim() || process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sgsseguranca.com.br";
}

export function getAllowedOrigins() {
  const configured = process.env.ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return configured && configured.length > 0 ? configured : [getSiteOrigin()];
}

export function getRequiredRuntimeIssues(): RuntimeEnvIssue[] {
  const issues: RuntimeEnvIssue[] = [];

  if (!hasValue(process.env.LEADS_WEBHOOK_URL)) {
    issues.push({
      key: "LEADS_WEBHOOK_URL",
      severity: PROD ? "error" : "warning",
      message: "Webhook de leads não configurado.",
    });
  } else if (!getLeadWebhookUrl()) {
    issues.push({
      key: "LEADS_WEBHOOK_URL",
      severity: "error",
      message: "Webhook de leads deve usar HTTPS.",
    });
  }

  if (PROD && !hasValue(process.env.LEAD_WEBHOOK_SECRET)) {
    issues.push({
      key: "LEAD_WEBHOOK_SECRET",
      severity: "error",
      message: "Segredo do webhook de leads ausente em produção.",
    });
  }

  if (!hasValue(process.env.TURNSTILE_SECRET_KEY)) {
    issues.push({
      key: "TURNSTILE_SECRET_KEY",
      severity: PROD ? "error" : "warning",
      message: "Chave secreta do Turnstile não configurada.",
    });
  }

  const redisEnabled = process.env.RATE_LIMIT_ENABLED !== "false";
  if (PROD && redisEnabled && (!hasValue(process.env.UPSTASH_REDIS_REST_URL) || !hasValue(process.env.UPSTASH_REDIS_REST_TOKEN))) {
    issues.push({
      key: "UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN",
      severity: "error",
      message: "Rate limit em produção precisa de Upstash Redis configurado.",
    });
  }

  return issues;
}

export function assertLeadRuntimeConfig(referenceId: string) {
  const issues = getRequiredRuntimeIssues();
  const blocking = issues.filter((issue) => issue.severity === "error");

  for (const issue of issues) {
    logSecurityEvent(issue.severity === "error" ? "RUNTIME_CONFIG_ERROR" : "RUNTIME_CONFIG_WARNING", {
      key: issue.key,
      message: issue.message,
      referenceId,
    });
  }

  return {
    ok: blocking.length === 0,
    issues,
  };
}
