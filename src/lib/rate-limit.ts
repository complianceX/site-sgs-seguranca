import { headers } from 'next/headers';

/**
 * Rate limit leve para fluxos institucionais.
 * Para produção com formulário real, substitua por storage compartilhado aprovado.
 */
const memoryStore = new Map<string, { count: number; reset: number }>();

export async function rateLimit(limit: number, windowMs: number) {
  const headerPayload = await headers();
  const forwardedFor = headerPayload.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

  const now = Date.now();
  const record = memoryStore.get(ip);
  if (!record || now > record.reset) {
    memoryStore.set(ip, { count: 1, reset: now + windowMs });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }
  if (record.count >= limit) return { success: false, remaining: 0, reset: record.reset };
  record.count += 1;
  return { success: true, remaining: limit - record.count, reset: record.reset };
}
