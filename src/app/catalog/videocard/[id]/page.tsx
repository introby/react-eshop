import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getTitle } from "@/Helper";

type VCItemProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: VCItemProps): Promise<Metadata> {
  const title = await getTitle(params.id);
  return {
    title,
  };
}

const VCItem: React.FC = () => <ProductCard />;

export default VCItem;
