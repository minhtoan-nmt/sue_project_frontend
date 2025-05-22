import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function middleware(request) {
    const cookie = await cookies();
    const token = cookie.get("token");
    if (!token && request.nextUrl.pathname !== "/auth/login") {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (token) {
      const role = cookie.get("role");
      if (role!=="Admin" && request.nextUrl.pathname === "/admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
}

export const config = {
  matcher: ['/admin', '/dashboard']
}