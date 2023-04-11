import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : false;
const initialState = { user };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const userObject = action.payload;
      localStorage.setItem("userId", userObject.uid);
      state.user = userObject;
    },
    logout: (state) => {
      localStorage.removeItem("userId");
      state.user = false;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
