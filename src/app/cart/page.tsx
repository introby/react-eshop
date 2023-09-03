"use client";

import { Metadata } from "next";
import axios from "axios";
import { useRouter } from "next/navigation";
import Stripe from "stripe";
import { useDispatch, useSelector } from "react-redux";

export const metadata: Metadata = {
  title: "Cart | Noliner shop",
};

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems: Stripe.Price[] = useSelector((state) => state.cart.items);

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.id,
        quantity: 1,
      };
    });

    const res = await axios.post("/api/checkout", {
      lineItems,
    });
    router.push(res.data.session.url);
  }

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        {cartItems.length === 0 ? (
          <p>Вы ничего не добавили в корзину!</p>
        ) : (
          <>
            {cartItems.map((cartItem) => {
              return (
                <div
                  key={cartItem.id}
                  className="flex flex-col gap-2 border-l border-solid border-slate-700 px-2"
                >
                  <div className="flex items-center justify-between">
                    <h2>{cartItem.product.name}</h2>
                  </div>
                  <p>{cartItem.unit_amount / 100} BYN</p>
                  <p className="text-slate-600 text-sm">Quantity: 1</p>
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
