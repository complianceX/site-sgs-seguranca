/**
 * Sanitização leve para textos de formulários institucionais.
 * Remove tags e caracteres de controle sem depender de pacotes externos.
 */
export function sanitizeText(value: string): string {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim();
}

export function sanitizeEmailSubject(value: string): string {
  // Previne Header Injection removendo quebras de linha
  return sanitizeText(value).replace(/[\r\n]/g, '');
}

export function sanitizeContactPayload<T extends Record<string, unknown>>(payload: T): T {
  const sanitized: Record<string, unknown> = { ...payload };
  if (typeof sanitized.name === "string") sanitized.name = sanitizeText(sanitized.name).substring(0, 120);
  if (typeof sanitized.message === "string") sanitized.message = sanitizeText(sanitized.message).substring(0, 2000);
  return sanitized as T;
}
