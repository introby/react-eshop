"use client";
import Stripe from "stripe";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setProduct } from "@/redux/features/cartSlice";

const ProductListItem = ({ item }: Stripe.Price) => {
  const { id: price_id, unit_amount: cost, product: productInfo } = item;
  const { name, description } = productInfo;
  const router = useRouter();
  const dispatch = useDispatch();

  function onProductClick() {
    dispatch(setProduct({ item }));
    router.push(`/catalog/cpu/${price_id}`);
  }

  return (
    <div
      onClick={onProductClick}
      className="flex flex-col flex-between shadow bg-white hover:shadow-lg cursor-pointer"
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>{cost / 100} BYN</p>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default ProductListItem;
