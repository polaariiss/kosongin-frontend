import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(
  request: NextRequest
) {

  const userToken =
    request.cookies.get("token");

  const adminToken =
    request.cookies.get(
      "admin_token"
    );

  const pathname =
    request.nextUrl.pathname;

  /* USER DASHBOARD */
  if (
    pathname.startsWith(
      "/dashboard"
    ) &&
    !userToken
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );
  }

  /* ADMIN DASHBOARD */
  if (
    pathname.startsWith(
      "/admin/dashboard"
    ) &&
    !adminToken
  ) {
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/dashboard/:path*",
  ],
};