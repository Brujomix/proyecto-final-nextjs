import { createSlice } from "@reduxjs/toolkit";
import { getEstadoApp } from "@/app/Api/EstadoAppApi/route";

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
        switch (action.payload) {
          case 1:
             state.Estado = true
            break;
          case 0:
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
