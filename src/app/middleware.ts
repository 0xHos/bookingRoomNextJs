// middleware.ts
import { NextResponse } from "next/server";

export function middleware() {
  // Your Middleware logic here
  console.log("middleware");
  return NextResponse.redirect("https://www.google.com"); // Pass control to the next Middleware or route handler
}

export const config = {
  matcher: ["/admin"],
};
