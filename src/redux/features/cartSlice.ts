import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "@/types";
import Stripe from "stripe";

type InitialStateType = {
  items: [];
  product: Stripe.Price;
};

const initialState = {
  items: [] as ItemProps[],
  product: null as Stripe.Price,
} as InitialStateType;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state);
      console.log(action);
      state.items.push(action.payload.item);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id === action.payload.id);
    },
    emptyCart(state, action) {
      state.items = [];
    },
    setProduct(state, action) {
      state.product = action.payload.item;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, setProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
