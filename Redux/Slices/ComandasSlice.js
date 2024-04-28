import { getComandasFech } from "@/app/CRUD/gets";
import { createSlice } from "@reduxjs/toolkit";

export const ComandasSlice = createSlice({
  name: "Comandas",
  initialState: {
    itemsComandas: [],
  },
  reducers: {
    addItemComandas: (state, action) => {
        state.itemsComandas.push(action.payload);
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getComandasFech.fulfilled , (state, action)=>{
      state.itemsComandas = action.payload
    })
    .addCase(getComandasFech.rejected , (state, action)=>{
      state.itemsComandas = []})
  }
})

export const { addItemComandas } = ComandasSlice.actions;
export default ComandasSlice.reducer;
