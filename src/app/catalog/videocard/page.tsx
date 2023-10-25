import { Metadata } from "next";
import Stripe from "stripe";
import ProductListItem from "@/components/ProductListItem";
import React from "react";
import { stripe } from "@/Helper";

export const metadata: Metadata = {
  title: "Video cards | Noliner shop",
};

async function getProducts() {
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  return res.data;
}

const VC: React.FC = async () => {
  const products: Stripe.Price[] = await getProducts();
  const vcs = products.filter(
    (product) => (product.product as Stripe.Product).metadata.type === "vc",
  );

  return (
    <>
      <h1>Видеокарты</h1>
      <div className="p-4 flex flex-col">
        <div className="max-w-[1040px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {vcs.map((vc) => (
            <ProductListItem key={vc.id} item={vc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VC;
