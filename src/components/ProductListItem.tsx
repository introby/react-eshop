"use client";
import Stripe from "stripe";
import { useRouter } from "next/navigation";
import { setProduct } from "@/redux/features/cartSlice";
import React from "react";
import { useAppDispatch } from "@/redux/store";

type ProductListItemProps = {
  item: Stripe.Price;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  const { id, unit_amount, product } = item;
  const { name, description } = isStripeProduct(product) && product;
  const router = useRouter();
  const dispatch = useAppDispatch();

  function onProductClick() {
    dispatch(setProduct(item));
    router.push(`/catalog/cpu/${id}`);
  }

  function isStripeProduct(
    product: string | Stripe.Product | Stripe.DeletedProduct,
  ): product is Stripe.Product {
    return true;
  }

  const [img] = isStripeProduct(product)
    ? product.images
    : "/assets/images/catalog/default-image.png";

  return (
    <div
      onClick={onProductClick}
      className="flex flex-col flex-between shadow bg-white hover:shadow-lg cursor-pointer"
    >
      <img src={img} alt={name} className="w-full object-cover" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>{unit_amount / 100} BYN</p>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default ProductListItem;
