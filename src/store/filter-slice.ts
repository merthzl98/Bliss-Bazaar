import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TEXTURE_LIST } from "../api/mock-data";

export type FilterInitialState = {
  priceValues: number[];
  textureList: Texture[];
};

const initialState: FilterInitialState = {
  priceValues: [3, 989],
  textureList: TEXTURE_LIST,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    applyPriceFilter: (state, action: PayloadAction<number[]>) => {
      state.priceValues = action.payload;
    },
    setTextureList:  (state, action: PayloadAction<Texture[]>) => {
      state.textureList = action.payload;
    },
  },
});

export const { applyPriceFilter, setTextureList } = filterSlice.actions;
export default filterSlice.reducer;
