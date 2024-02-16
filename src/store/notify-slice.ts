import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NotifyInitialState = {
  isNotified: boolean;
  message: string;
  severity: "error" | "warning" | "success" | "info";
};

const initialState: NotifyInitialState = {
  isNotified: false,
  message: "",
  severity: "error",
};

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    setIsNotified: (state, action: PayloadAction<NotifyInitialState>) => {
      state.isNotified = action.payload.isNotified;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  },
});

export const { setIsNotified } = notifySlice.actions;
export default notifySlice.reducer;
