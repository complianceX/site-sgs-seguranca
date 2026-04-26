import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }

  if (request.nextUrl.pathname.startsWith('/api/') && request.method === 'TRACE') {
    return new NextResponse(null, { status: 405 });
  }

  const host = request.headers.get('host');
  if (host?.includes('staging') || host?.includes('homolog')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return response;
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
