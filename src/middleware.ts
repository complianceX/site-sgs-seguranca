import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // FASE 4: Proteção de Cache para rotas sensíveis
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }

  // FASE 10: Bloqueio de métodos não permitidos em rotas públicas
  if (request.nextUrl.pathname.startsWith('/api/') && request.method === 'TRACE') {
    return new NextResponse(null, { status: 405 });
  }

  // FASE 8 & 13: Bloqueio de indexação para subdomínios de staging/homologação
  const host = request.headers.get('host');
  if (host?.includes('staging') || host?.includes('homolog')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return response;
}

// Configura o middleware para rodar em rotas de API e páginas principais
export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};