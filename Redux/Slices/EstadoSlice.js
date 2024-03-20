import { createSlice } from "@reduxjs/toolkit";

export const EstadoSlice = createSlice({
  name: "Estado",
  initialState: {
    Estado: false,
  },
  reducers: {
    setEstado: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setEstado } = EstadoSlice.actions;
export default EstadoSlice.reducer;
