import { NextResponse } from "next/server";

// Example file URL
const FILE_URL = "https://cdn.callingstation.co.in/releases/desktop/CallingStation.exe?affiliateCode=dsgs";

export async function GET() {
  return NextResponse.redirect(FILE_URL);
}
