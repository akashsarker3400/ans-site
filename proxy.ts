import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Domain -> locale mapping.
// ans.bd (and any preview/host fallback)  -> Bangla
// ans.digital                             -> English
function localeForHost(host: string): "bn" | "en" {
  if (host.includes("ans.digital")) return "en";
  return "bn";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already-locale-prefixed, static assets, and API routes pass through untouched.
  if (
    pathname.startsWith("/bn") ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const host = request.headers.get("host") || "";
  const locale = localeForHost(host);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
