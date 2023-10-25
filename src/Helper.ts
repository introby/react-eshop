import Stripe from "stripe";

export async function getTitle(priceId: string) {
  const price: Stripe.Price = await stripe.prices.retrieve(priceId);
  let title: string;
  const product = price.product;
  if (typeof product === "string") {
    const prod: Stripe.Product = await stripe.products.retrieve(product);
    title = prod.name;
  } else {
    title = isStripeProduct(product) ? product.name : "";
  }
  return title;
}

export function isStripeProduct(
  product: string | Stripe.Product | Stripe.DeletedProduct,
): product is Stripe.Product {
  return true;
}

export const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "",
  {
    apiVersion: "2023-08-16",
    typescript: true,
  },
);
