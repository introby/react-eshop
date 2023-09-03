import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({
  params: { id },
}: Props): Promise<Metadata> => {
  return {
    title: "Video card",
  };
};

const VCItem = ({ params: { id } }: Props) => <ProductCard />;

export default VCItem;
