import { createSlice } from "@reduxjs/toolkit";

export const EstadoAppSlice = createSlice({
  name: "Estado",
  initialState: {
    Estado: false,
  },
  reducers: {
    setEstado: (state, action) => {
      state.Estado = action.payload;
    },
  },
});

export const { setEstado } = EstadoAppSlice.actions;
export default EstadoAppSlice.reducer;
