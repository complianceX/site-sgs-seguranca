import DOMPurify from 'isomorphic-dompurify';

/**
 * FASE 5: Sanitização real de inputs para prevenir XSS e Injection
 */
export function sanitizeText(value: string): string {
  if (!value) return "";
  // Remove todas as tags HTML e limpa atributos perigosos
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [], // Bloqueio total de tags
    ALLOWED_ATTR: []
  }).trim();
}

export function sanitizeEmailSubject(value: string): string {
  // Previne Header Injection removendo quebras de linha
  return sanitizeText(value).replace(/[\r\n]/g, '');
}

export function sanitizeContactPayload<T extends Record<string, any>>(payload: T): T {
  const sanitized = { ...payload };
  if (sanitized.name) sanitized.name = sanitizeText(sanitized.name).substring(0, 120);
  if (sanitized.message) sanitized.message = sanitizeText(sanitized.message).substring(0, 2000);
  return sanitized;
}