import { createArtical } from "@/app/models";
import exp from "constants";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// get all artical
export async function GET() {
  return NextResponse.json({ msg: "hello" });
}

//this endpoint to create artical
export async function POST(req: NextApiRequest) {
  const data = await req.json();
  createArtical({ ...data });
  return NextResponse.json({ msg: "post request" });
}
