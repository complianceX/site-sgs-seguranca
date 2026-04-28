import { headers } from 'next/headers';
import { isProductionRuntime } from "@/lib/env";
import { logSecurityEvent } from "@/lib/security-logger";

const memoryStore = new Map<string, { count: number; reset: number }>();

type RateLimitResult = {
  success: boolean;
  remaining: number;
  reset: number;
  mode: "upstash" | "memory" | "disabled";
};

function getClientIp(headerPayload: Headers) {
  const forwardedFor = headerPayload.get('x-forwarded-for');
  const realIp = headerPayload.get("x-real-ip");
  return forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';
}

function getRouteKey(headerPayload: Headers) {
  const nextUrl = headerPayload.get("x-invoke-path") || headerPayload.get("next-url");
  return nextUrl || "api";
}

async function upstashRateLimit(key: string, limit: number, windowMs: number): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const now = Date.now();
  const reset = now + windowMs;
  const redisKey = `rl:${key}`;

  try {
    const response = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", redisKey],
        ["PEXPIRE", redisKey, windowMs, "NX"],
        ["PTTL", redisKey],
      ]),
      cache: "no-store",
    });

    if (!response.ok) return null;

    const result = (await response.json()) as Array<{ result: number | string | null }>;
    const count = Number(result[0]?.result ?? 1);
    const ttl = Number(result[2]?.result ?? windowMs);
    const resetAt = now + (ttl > 0 ? ttl : windowMs);

    return {
      success: count <= limit,
      remaining: Math.max(limit - count, 0),
      reset: resetAt || reset,
      mode: "upstash",
    };
  } catch {
    return null;
  }
}

function memoryRateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  const record = memoryStore.get(key);
  if (!record || now > record.reset) {
    memoryStore.set(key, { count: 1, reset: now + windowMs });
    return { success: true, remaining: limit - 1, reset: now + windowMs, mode: "memory" };
  }
  if (record.count >= limit) return { success: false, remaining: 0, reset: record.reset, mode: "memory" };
  record.count += 1;
  return { success: true, remaining: limit - record.count, reset: record.reset, mode: "memory" };
}

export async function rateLimit(limit: number, windowMs: number): Promise<RateLimitResult> {
  if (process.env.RATE_LIMIT_ENABLED === "false") {
    return { success: true, remaining: limit, reset: Date.now() + windowMs, mode: "disabled" };
  }

  const headerPayload = await headers();
  const ip = getClientIp(headerPayload);
  const route = getRouteKey(headerPayload);
  const key = `${route}:${ip}`;

  const upstashResult = await upstashRateLimit(key, limit, windowMs);
  if (upstashResult) return upstashResult;

  if (isProductionRuntime()) {
    logSecurityEvent("RATE_LIMIT_REDIS_UNAVAILABLE", {
      route,
      mode: "blocked",
    });
    return { success: false, remaining: 0, reset: Date.now() + windowMs, mode: "upstash" };
  }

  logSecurityEvent("RATE_LIMIT_MEMORY_FALLBACK", {
    route,
    mode: "development",
  });
  return memoryRateLimit(key, limit, windowMs);
}
