import { createSlice } from "@reduxjs/toolkit";

export const UsuarioSlice = createSlice({
  name: "Usuario",
  initialState: {
    currentUser: { user: {}, isLogin: false },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = UsuarioSlice.actions;
export default UsuarioSlice.reducer;
