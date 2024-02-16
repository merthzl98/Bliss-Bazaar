import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalInitialState = {
  isShownLoginModal: boolean;
  isShownCartModal: boolean;
};

const initialState: ModalInitialState = {
  isShownLoginModal: false,
  isShownCartModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsShownLoginModal: (state, action: PayloadAction<boolean>) => {
      state.isShownLoginModal = action.payload;
    },
    setIsShownCartModal: (state, action: PayloadAction<boolean>) => {
      state.isShownCartModal = action.payload;
    },
  },
});

export const { setIsShownLoginModal, setIsShownCartModal } = uiSlice.actions;
export default uiSlice.reducer;
