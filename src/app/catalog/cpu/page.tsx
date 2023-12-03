import { Metadata } from "next";
import ProductListItem from "@/components/ProductListItem";
import React from "react";
import { getProducts } from "@/Helper";

export const metadata: Metadata = {
  title: "CPU | Noliner shop",
};

const Cpu: React.FC = async () => {
  const products = await getProducts("cpu");
  return (
    <>
      <h1>Процессоры</h1>
      <div className="p-4 flex flex-col">
        <div className="max-w-[1040px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((cpu) => (
            <ProductListItem key={cpu.id} item={cpu} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cpu;
