import { headers } from 'next/headers';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * FASE 1: Substituição de In-Memory por Upstash Redis (Produção Escalável)
 */

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Fallback apenas para desenvolvimento
const memoryStore = new Map<string, { count: number; reset: number }>();

export async function rateLimit(limit: number, windowMs: number) {
  if (process.env.NODE_ENV === "production" && !redis) {
    throw new Error("Segurança Crítica: Upstash Redis não configurado em ambiente de produção.");
  }

  const headerPayload = await headers();
  const forwardedFor = headerPayload.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
  
  // Se temos Redis, usamos o algoritmo de janela deslizante global
  if (redis) {
    const ratelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(limit, `${Math.floor(windowMs / 1000)} s`),
      analytics: true,
      prefix: "@sgs/ratelimit",
    });

    const result = await ratelimit.limit(ip);
    return {
      success: result.success,
      remaining: result.remaining,
      reset: result.reset,
    };
  }

  // Fallback dev local (Não adequado para produção)
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