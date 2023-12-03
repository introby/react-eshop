import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Stripe from "stripe";
import toast from "react-hot-toast";

interface CartSliceState {
  items: Stripe.Price[];
  product: Stripe.Price | null;
}

const initialState: CartSliceState = {
  items: [],
  product: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Stripe.Price>) {
      state.items.push(action.payload);
      toast.success("Item added successfully");
    },
    removeFromCart(state, action: PayloadAction<Stripe.Price>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    emptyCart(state) {
      state.items = [];
    },
    setProduct(state, action: PayloadAction<Stripe.Price>) {
      state.product = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, setProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
