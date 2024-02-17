import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserInitialState = {
  hasLoggedIn: boolean;
  token: string;
  userLevel: string;
};

const initialState: UserInitialState = {
  hasLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") ?? "",
  userLevel: localStorage.getItem("userLevel") ?? "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLogin: (state, action: PayloadAction<UserInitialState>) => {
      state.hasLoggedIn = action.payload.hasLoggedIn;
      state.token = action.payload.token;
      state.userLevel = action.payload.userLevel;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userLevel", action.payload.userLevel);
    },
    getLogout: (state, action: PayloadAction<UserInitialState>) => {
      state.hasLoggedIn = action.payload.hasLoggedIn;
      state.token = "";
      state.userLevel = "";
      localStorage.clear();
    },
  },
});

export const { getLogin, getLogout } = userSlice.actions;
export default userSlice.reducer;
