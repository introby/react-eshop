import { Metadata, ResolvingMetadata } from "next";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getTitle } from "@/Helper";

type CpuItemProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: CpuItemProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = await getTitle(params.id);
  return {
    title,
  };
}

const CpuItem: React.FC = () => <ProductCard />;

export default CpuItem;
