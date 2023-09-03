import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

async function handler(request: NextRequest, response: NextResponse) {
  if (request.method !== "POST") {
    return response.status(405);
  }
  const body = await request.json();
  console.log(body);
  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "", {
      apiVersion: "2023-08-16",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (err) {
    console.log("Error", err);
    return new Response("Error", {
      status: 405,
    });
  }
}

export { handler as GET, handler as POST };
