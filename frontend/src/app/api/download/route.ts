import { NextResponse } from "next/server";
 
const FILE_URL =
  "https://cdn.callingstation.co.in/releases/desktop/CallingStation.exe?affiliateCode=GPS";
const API_BASE_URL = "https://gameapi.thespartanpoker.in/pokerapi/v1/website";
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const affiliateId = searchParams.get("affiliateCode") || "";
    const userAgent = request.headers.get("user-agent") || "Unknown";
    await trackSession(affiliateId,userAgent);
 
    // ✅ Then redirect
    return NextResponse.redirect('https://gamecdn.sniper.poker/download-now');
  } catch (error) {
    console.error("Download route error:", error);
    return NextResponse.json({ error: "Failed to track session" }, { status: 500 });
  }
}
 
async function trackSession(affiliateId: string, userAgent:string) {
  try {
    const response = await fetch(`${API_BASE_URL}/track_session`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": userAgent},
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        clientName: "Sniper Poker",
        affiliateCode: affiliateId,
        utmSource: "Sniper Poker",
        utmMedium: "CPC",
        utmCampaign: "utmCampaign",
      }),
    });
 
    if (!response.ok) {
      console.error("API returned non-OK status:", response.status);
      return;
    }
 
    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error calling API:", error);
  }
}