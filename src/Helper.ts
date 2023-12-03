import Stripe from "stripe";

export async function getTitle(priceId: string) {
  const price: Stripe.Price = await stripe.prices.retrieve(priceId);
  const product = price.product;
  if (typeof product === "string") {
    const prod: Stripe.Product = await stripe.products.retrieve(product);
    return prod.name;
  }
  return isStripeProduct(product) ? product.name : "";
}

export function isStripeProduct(
  product: string | Stripe.Product | Stripe.DeletedProduct,
): product is Stripe.Product {
  return true;
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-08-16",
  typescript: true,
});

export async function getProducts(type: "vc" | "cpu") {
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  return res.data.filter(
    (product) => (product.product as Stripe.Product).metadata.type === type,
  );
}
