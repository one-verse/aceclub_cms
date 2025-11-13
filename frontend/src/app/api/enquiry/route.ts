import { strapiCall } from "@/../lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const forStrapi = await request.json(); // { name, email, message }
    
    // Strapi v5 expects payload wrapped in "data"
    const response = await strapiCall.post("/api/enquiries", {
      data: forStrapi, // payload
    }, {
      headers: { "Content-Type": "application/json" }, // config
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        errorMessage: error.message,
        error: "Something went wrong, please try again later",
      }),
      { status: 500 }
    );
  }
}
