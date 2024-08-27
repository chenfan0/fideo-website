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
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/cn', request.url));
  }
  return intlMiddleware(request);
}