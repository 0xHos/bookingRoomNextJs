// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // // Your Middleware logic here
  // const { pathname } = req.nextUrl;
  // if (pathname.startsWith("/admin")) {
  //   console.log(" done admin");
  // } else if (pathname.startsWith("/hi")) {
  //   console.log(" done hi");
  // } else {
  //   console.log(" done ==========");
  // }
}

// function uploaderMiddleware(req: NextRequest) {
//   console.log("uploader middleware....");
//   ne
// }

export const config = {};
