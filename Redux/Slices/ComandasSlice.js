import { getComandasFechRedux } from "@/app/CRUD/gets";
import { createSlice } from "@reduxjs/toolkit";

export const ComandasSlice = createSlice({
  name: "Comandas",
  initialState: {
    currentComandas: []
  },
  reducers: {
    
  },
  extraReducers:(builder)=>{
    builder.addCase(getComandasFechRedux.fulfilled, (state, action) => {
      state.currentComandas = action.payload;
    }),
      builder.addCase(getComandasFechRedux.rejected, (state) => {
        state.currentComandas = [];
      });
  }
});

export default ComandasSlice.reducer;
