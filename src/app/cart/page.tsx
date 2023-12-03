"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Stripe from "stripe";
import { useSelector } from "react-redux";
import React from "react";
import { isStripeProduct } from "@/Helper";

const Cart: React.FC = () => {
  const router = useRouter();
  const cartItems: Stripe.Price[] = useSelector((state) => state.cart.items);

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.id,
        quantity: 1,
      };
    });

    const { data } = await axios.post<Stripe.Checkout.Session>(
      "/api/checkout",
      {
        lineItems,
      },
    );
    if (typeof data.url === "string") {
      router.push(data.url);
    }
  }

  const count = new Map<Stripe.Price, number>();

  for (const item of cartItems) {
    const key = [...count.keys()].find((k: Stripe.Price) => k.id === item.id);
    if (key) {
      count.set(key, count.get(key) + 1);
    } else {
      count.set(item, 1);
    }
  }

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        {count.size === 0 ? (
          <p>Вы ничего не добавили в корзину!</p>
        ) : (
          <>
            {[...count].map(([cartItem, quantity]: [Stripe.Price, number]) => {
              const productName = isStripeProduct(cartItem.product)
                ? cartItem.product.name
                : "";
              return (
                <div
                  key={cartItem.id}
                  className="flex flex-col gap-2 border-l border-solid border-slate-700 px-2"
                >
                  <div className="flex items-center justify-between">
                    <h2>{productName}</h2>
                  </div>
                  <p>{(cartItem.unit_amount * quantity) / 100} BYN</p>
                  <p className="text-slate-600 text-sm">Quantity: {quantity}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        {cartItems.length !== 0 && (
          <div
            onClick={checkout}
            className="border border-solid border-slate-700 text-xl
  m-4 p-6 uppercase grid place-items-center hover:opacity-60"
          >
            Оплатить
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
