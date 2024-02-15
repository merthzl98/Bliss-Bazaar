import { configureStore } from "@reduxjs/toolkit";

import FilterReducer from "./filter-slice";
import UserReducer from "./user-slice";
import UIReducer from "./ui-slice";

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    user: UserReducer,
    ui: UIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
