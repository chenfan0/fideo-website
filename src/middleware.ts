import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "cn"],

  // Used when no locale matches
  defaultLocale: "cn",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(cn|en)/:path*"],
};
export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (
    pathname === "/" ||
    (!pathname.startsWith("/cn") && !pathname.startsWith("/en"))
  ) {
    // 获取用户的首选语言
    const language =
      request.headers.get("accept-language")?.split(",")[0].split("-")[0] ||
      "en";

    // 确定重定向的语言前缀
    const langPrefix = language === "zh" ? "/cn" : "/en";

    // 构建新的 URL
    const newUrl = `${langPrefix}${pathname === "/" ? "" : pathname}${search}`;

    // 重定向到新的 URL
    return NextResponse.redirect(new URL(newUrl, request.url));
  }

  // 对于已经有语言前缀的路径,使用 intlMiddleware
  return intlMiddleware(request);
}
