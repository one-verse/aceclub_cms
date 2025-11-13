import { strapiCall } from "@/../lib/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    console.log("Form data received at Next.js API:", formData);

    // Forward to Strapi (wrap under "data")
    const response = await strapiCall.post("/enquiries", { data: formData });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error in Next.js /api/enquiry:", error.message);
    return NextResponse.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}

