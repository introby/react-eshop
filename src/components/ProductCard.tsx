"use client";

import CustomButton from "@/components/CustomButton";
import { useSelector } from "react-redux";
import Stripe from "stripe";
import { addToCart } from "@/redux/features/cartSlice";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { isStripeProduct } from "@/Helper";
import { useAppDispatch } from "@/redux/store";
import { router } from "next/client";

const ProductCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const stripeItem: Stripe.Price = useSelector((state) => state.cart.product);
  const product: Stripe.Product | null = isStripeProduct(stripeItem.product)
    ? stripeItem.product
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart(stripeItem));
  };

  useEffect(() => {
    if (!product?.name) {
      router.push("/catalog");
    }
  }, [product, router]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row w-full max-w-[1040px] mx-auto">
          <div className="md:p-2 md:shadow">
            <img
              src={product?.images[0]}
              alt={product?.name}
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
              <h3>{product?.name}</h3>
              <p className="md:text-base">
                {stripeItem.unit_amount
                  ? stripeItem.unit_amount / 100 + " BYN"
                  : "Нет данных"}
              </p>
            </div>
            <p className="text-sm">{product?.description}</p>

            <CustomButton
              title="В корзину"
              containerStyles="bg-primary-blue text-white rounded-full w-40 hover:scale-110"
              handleClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ProductCard;
