import { configureStore } from "@reduxjs/toolkit";

import FilterReducer from "./filter-slice";

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
