import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { nonProtectedPathnames } from "./app/constants/constants";

export function middleware(request: NextRequest) {
  if (
    nonProtectedPathnames.some(
      (partialPath) => !request.nextUrl.pathname.startsWith(partialPath)
    )
  ) {
    if (request.nextUrl.pathname === "/auth/login") return;

    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
