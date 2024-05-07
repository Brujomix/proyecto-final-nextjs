import { getEstadoApp } from "@/app/CRUD/gets";
import { createSlice } from "@reduxjs/toolkit";

export const EstadoAppSlice = createSlice({
  name: "Estado",
  initialState: {
    Estado: false,
    Errors: "",
  },
  reducers: {
    setEstado: (state, action) => {
      state.Estado = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEstadoApp.fulfilled, (state, action) => {
        switch (action.payload.enc_desc) {
          case "1":
             state.Estado = true
            break;
          case "0":
             state.Estado = false
            break;
        }
      })
      .addCase(getEstadoApp.rejected, (state, action) => {
        state.Errors = action.error;
      });
  },
});

export const { setEstado } = EstadoAppSlice.actions;
export default EstadoAppSlice.reducer;
