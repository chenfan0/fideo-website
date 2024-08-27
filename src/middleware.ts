import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
 
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'cn'],
 
  // Used when no locale matches
  defaultLocale: 'cn'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(cn|en)/:path*']
};
export default function middleware(request: NextRequest) {
  // 这里需要处理其他参数，像?q=123
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/cn', request.url));
  }
  return intlMiddleware(request);
}