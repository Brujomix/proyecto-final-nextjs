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
});

export const { addItemComandas } = ComandasSlice.actions;
export default ComandasSlice.reducer;
