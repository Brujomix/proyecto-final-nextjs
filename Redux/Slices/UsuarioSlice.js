import { createSlice } from "@reduxjs/toolkit";

export const UsuarioSlice = createSlice({
  name: "Usuario",
  initialState: {
    currentUser: {},
    isLogin: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    cerrarSession: (state, action) => {
      state.currentUser = {};
      state.isLogin = false;
    },
  },
});

export const { setCurrentUser, setIsLogin, cerrarSession } = UsuarioSlice.actions;
export default UsuarioSlice.reducer;
