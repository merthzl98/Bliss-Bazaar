import { configureStore } from "@reduxjs/toolkit";

import FilterReducer from "./filter-slice";
import UserReducer from "./user-slice";
import NotifyReducer from "./notify-slice";
import UIReducer from "./ui-slice";
import CartReducer from "./cart-slice";

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    user: UserReducer,
    notify: NotifyReducer,
    ui: UIReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
