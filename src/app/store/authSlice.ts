import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: { payload: { token: string } }) => {
      state.isAuth = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
