import { Metadata } from "next";
import ProductListItem from "@/components/ProductListItem";
import React from "react";
import { getProducts } from "@/Helper";

export const metadata: Metadata = {
  title: "Video cards | Noliner shop",
};

const VC: React.FC = async () => {
  const products = await getProducts("vc");

  return (
    <>
      <h1>Видеокарты</h1>
      <div className="p-4 flex flex-col">
        <div className="max-w-[1040px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((vc) => (
            <ProductListItem key={vc.id} item={vc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VC;
