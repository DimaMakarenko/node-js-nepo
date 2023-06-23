import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.SECRET_KEY;

  // await fetch(`https://some.domain.com?apiKey=${API_KEY}`);

  return NextResponse.json(API_KEY)
}
