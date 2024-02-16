import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserInitialState = {
  hasLoggedIn: boolean;
  token: string;
};

const initialState: UserInitialState = {
  hasLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") ?? "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLogin: (state, action: PayloadAction<UserInitialState>) => {
      state.hasLoggedIn = action.payload.hasLoggedIn;
      localStorage.setItem("token", action.payload.token);
    },
    getLogout: (state, action: PayloadAction<UserInitialState>) => {
      state.hasLoggedIn = action.payload.hasLoggedIn;
      localStorage.removeItem("token");
    },
  },
});

export const { getLogin, getLogout } = userSlice.actions;
export default userSlice.reducer;
