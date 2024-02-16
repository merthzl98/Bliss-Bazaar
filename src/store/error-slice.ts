import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ErrorInitialState = {
  hasError: boolean;
  message: string;
};

const initialState: ErrorInitialState = {
  hasError: false,
  message: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setHasError: (state, action: PayloadAction<ErrorInitialState>) => {
      state.hasError = action.payload.hasError;
      state.message = action.payload.message;
    },
  },
});

export const { setHasError } = errorSlice.actions;
export default errorSlice.reducer;
