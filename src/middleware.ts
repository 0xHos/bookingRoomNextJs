import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  const session = cookies().get("appwrite-session");

  const isAuth = session ? true : false;

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // make middleware run for this path
  matcher: ["/bookings", "/room/add", "/rooms/my"],
};
