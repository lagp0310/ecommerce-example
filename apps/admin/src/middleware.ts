import { NextRequest, NextResponse } from "next/server";
import {
  authLoginRoute,
  nonProtectedPathnames,
  sessionCookieName,
} from "@/app/constants/constants";
import { baseSupabaseClient } from "@/app/providers/data/dataProvider";

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get(sessionCookieName)?.value;
  const jsonSessionCookie = !!sessionCookie ? JSON.parse(sessionCookie) : null;
  const {
    data: { user },
  } = await baseSupabaseClient.auth.getUser(jsonSessionCookie?.access_token);

  if (
    !user &&
    nonProtectedPathnames.some(
      (partialPath) => !request.nextUrl.pathname.startsWith(partialPath)
    )
  ) {
    if (request.nextUrl.pathname === authLoginRoute) return;
    return NextResponse.redirect(new URL(authLoginRoute, request.url));
  }

  if (
    !!user &&
    nonProtectedPathnames.some((partialPath) =>
      request.nextUrl.pathname.startsWith(partialPath)
    )
  ) {
    return NextResponse.redirect(`${request.nextUrl.origin}/admin/dashboard`);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
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
