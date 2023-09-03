import { Metadata } from "next";
import Stripe from "stripe";
import ProductListItem from "@/components/ProductListItem";

export const metadata: Metadata = {
  title: "Video cards | Noliner shop",
};

async function getProducts() {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2023-08-16",
    typescript: true,
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  return res.data;
}

const VC = async () => {
  const products = await getProducts();
  const vcs = products.filter(
    (product) => product.product.metadata.type === "vc",
  );

  return (
    <>
      <h1>Видеокарты</h1>
      <div className="p-4 flex flex-col">
        <div className="max-w-[1040px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {vcs.map((vc: any) => (
            <ProductListItem key={vc.id} item={vc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VC;
