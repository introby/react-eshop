import { Metadata } from "next";
import Stripe from "stripe";
import ProductListItem from "@/components/ProductListItem";

export const metadata: Metadata = {
  title: "CPU | Noliner shop",
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

const Cpu = async () => {
  const products = await getProducts();
  const cpus = products.filter(
    (product) => product.product.metadata.type === "cpu",
  );
  console.log(cpus);

  return (
    <>
      <h1>Процессоры</h1>
      <div className="p-4 flex flex-col">
        <div className="max-w-[1040px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cpus.map((cpu: any) => (
            <ProductListItem key={cpu.id} item={cpu} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cpu;
