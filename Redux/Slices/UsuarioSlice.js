import { createSlice } from "@reduxjs/toolkit";

export const UsuarioSlice = createSlice({
  name: "Usuario",
  initialState: {
    currentUser: null,
    isLogin: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload
      state.isLogin = true;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    },
    logOutUser: (state) => {
      state.currentUser = null;
      state.isLogin = false;
      localStorage.removeItem('currentUser');
    }
  },
});

export const { loginUser, logOutUser } = UsuarioSlice.actions;
export default UsuarioSlice.reducer;
