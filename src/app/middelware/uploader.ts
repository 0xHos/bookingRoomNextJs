import { NextResponse } from "next/server";

export const config = {
  matcher: "*",
};

export function middleware(req: Request) {
  console.log("middelware uploader");
  NextResponse.next();
}
