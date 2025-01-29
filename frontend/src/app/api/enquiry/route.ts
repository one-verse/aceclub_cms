import { strapiCall } from "@/../lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const forStrapi = await request.json();
    const response = await strapiCall.post("/api/enquiries", {
      headers: { "Content-Type": "application/json" },
      data: forStrapi,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        errorMessage: error.message,
        error: "Something went wrong, please try again later",
      }),
      {
        status: 500,
      }
    );
  }
}
