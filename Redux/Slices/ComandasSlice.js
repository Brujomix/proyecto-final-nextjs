import { getComandasFech } from "@/app/CRUD/gets";
import { createSlice } from "@reduxjs/toolkit";

export const ComandasSlice = createSlice({
  name: "Comanda",
  initialState: {
    currentComandas:[]
  },
  reducers: {
    addComandaRedux: (state, action) => {
      
    },
  },
  extraReducers:(builder)=>{
    builder.
    addCase(getComandasFech.fulfilled,(state, action)=>{
      state.currentComandas = action.payload
    })
  }
});

export const { addComandaRedux } = ComandasSlice.actions;
export default ComandasSlice.reducer;
