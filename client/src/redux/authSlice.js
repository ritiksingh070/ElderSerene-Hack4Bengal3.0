import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem('authToken', action.payload.token);
    },
    logout(state) {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem('authToken');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
