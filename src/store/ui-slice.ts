import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIInitialState = {
  hasError: boolean;
  message: string;
};

const initialState: UIInitialState = {
  hasError: false,
  message: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHasError: (state, action: PayloadAction<UIInitialState>) => {
      state.hasError = action.payload.hasError;
      state.message = action.payload.message;
    },
  },
});

export const { setHasError } = uiSlice.actions;
export default uiSlice.reducer;
