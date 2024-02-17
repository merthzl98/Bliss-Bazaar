import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";
import { PRODUCT_LIST } from "../api/mock-data";

type InteractionsInitialState = {
  allProducts: Product[];
};

const storedItems = localStorage.getItem("allProducts");

const initialState: InteractionsInitialState = {
  allProducts: storedItems ? JSON.parse(storedItems) : PRODUCT_LIST,
};

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState,
  reducers: {
    toggleFav: (state, action: PayloadAction<number>) => {
      const favedIndex = state.allProducts.findIndex(
        (product) => product.id === action.payload
      );

      state.allProducts[favedIndex].isFaved =
        !state.allProducts[favedIndex].isFaved;
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
    },

    resetProducts: (state) => {
      state.allProducts = PRODUCT_LIST;
    },
  },
});

export const { toggleFav, resetProducts } = interactionsSlice.actions;
export default interactionsSlice.reducer;
