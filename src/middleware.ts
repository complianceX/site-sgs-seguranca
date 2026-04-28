import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware de Segurança e Performance na Edge (Cloudflare)
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // 1. Prevenção de Clickjacking e outros headers de segurança
  // Nota: Alguns já estão no next.config.ts, mas reforçamos aqui para rotas dinâmicas
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 2. Detecção de Bots e Geolocation (Cloudflare Headers)
  // Exemplo: Bloquear acesso de países específicos se necessário
  const country = request.headers.get('cf-ipcountry');
  const botScore = request.headers.get('cf-bot-score');

  // Log de auditoria simples (opcional para depuração na Edge)
  if (botScore && parseInt(botScore) < 30) {
    // Poderíamos bloquear aqui, mas deixaremos para o WAF da Cloudflare
    // para evitar falsos positivos sem análise prévia.
  }

  // 3. Otimização de Cache para Assets Estáticos
  if (pathname.startsWith('/_next/static') || pathname.includes('/images/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}

// Configuração de matchers para evitar overhead em chamadas de API internas ou arquivos públicos
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/image|favicon.ico).*)',
  ],
};
