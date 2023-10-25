import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/Helper";

async function handler(request: NextRequest, response: NextResponse) {
  const errorResponse = new Response("Error", {
    status: 405,
  });
  if (request.method !== "POST") {
    return errorResponse;
  }
  const body = await request.json();
  if (body.lineItems.length === 0) {
    return errorResponse;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json(session);
  } catch (err) {
    return errorResponse;
  }
}

export { handler as GET, handler as POST };
