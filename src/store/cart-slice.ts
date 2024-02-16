import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../models/cart";

type CartInitialState = {
  products: CartItem[];
  totalQuantity: number;
};

const initialState: CartInitialState = {
  products: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem!.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice = existingItem!.totalPrice - existingItem!.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
