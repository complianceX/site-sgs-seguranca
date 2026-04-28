import { NextResponse } from 'next/server';
import { ContactSchema, verifyTurnstile } from '@/lib/security';
import { rateLimit } from '@/lib/rate-limit';
import { logSecurityEvent } from '@/lib/security-logger';
import { sanitizeContactPayload } from '@/lib/sanitize';

export async function POST(req: Request) {
  const cId = crypto.randomUUID(); // correlationId

  try {
    // 1. RATE LIMIT GLOBAL (Sliding Window via Redis)
    const rl = await rateLimit(5, 10 * 60 * 1000);
    if (!rl.success) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { path: '/api/contact', correlationId: cId });
      return NextResponse.json(
        { error: 'Muitas tentativas. Tente novamente em 10 minutos.' },
        { status: 429, headers: { 'Retry-After': '600', 'X-Correlation-ID': cId } }
      );
    }

    const body = await req.json();

    // 2. VALIDAÇÃO SCHEMA (ZOD)
    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    // 3. VERIFICAÇÃO ANTI-BOT (TURNSTILE)
    const turnstile = await verifyTurnstile(result.data.turnstileToken);
    if (!turnstile.success) {
      const emailDomain = result.data.email.split("@")[1] ?? "unknown";
      logSecurityEvent('BOT_ATTEMPT_BLOCKED', { emailDomain, correlationId: cId });
      return NextResponse.json({ error: 'Falha na verificação anti-bot' }, { status: 403 });
    }

    // 4. SANITIZAÇÃO REAL (DOMPURIFY)
    const safeData = sanitizeContactPayload(result.data);

    // 5. PROCESSAMENTO SEGURO
    // await sendEmail(safeData);

    return NextResponse.json({ success: true });

  } catch (error) {
    logSecurityEvent('INTERNAL_API_ERROR', { error: 'Unknown', correlationId: cId });
    return NextResponse.json(
      { error: 'Erro interno no servidor', correlationId: cId },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  // FASE 7: CORS Seguro
  const allowedOrigin = process.env.SITE_ORIGIN || 'https://sgsseguranca.com.br';
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
