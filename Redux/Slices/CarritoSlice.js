import { createSlice } from "@reduxjs/toolkit";

export const CarritoSlice = createSlice({
  name: "Carrito",
  initialState: {
    itemsCarrito: [],
  },
  reducers: {
    addItemCarrito: (state, action) => {
      const res = state.itemsCarrito.findIndex(e => e.pro_iden === parseInt(action.payload.pro_iden))
      if(res === -1){
        state.itemsCarrito.push({...action.payload, "Cantidad" : 1});
      }else{
        const updateItem = state.itemsCarrito.find(e => e.pro_iden === parseInt(action.payload.pro_iden))
        updateItem.Cantidad += 1;       
      }
    },
    removeItemCarrito: (state, action) => {
      const res = state.itemsCarrito.findIndex(e => e.pro_iden === parseInt(action.payload))
      const updateItem = state.itemsCarrito.find(e => e.pro_iden === parseInt(action.payload))
      if(res !== -1){
        const cantidadUpdate = updateItem.Cantidad -= 1;
        state.itemsCarrito[res] = {...updateItem, "Cantidad": cantidadUpdate};
        if(cantidadUpdate === 0){
          state.itemsCarrito = state.itemsCarrito.filter((e) => e.pro_iden !== parseInt(action.payload))
        }
      }
    },
    resetCarrito: (state, action)=>{
      state.itemsCarrito = [];
    }

  },
});

export const { addItemCarrito, removeItemCarrito, resetCarrito } =
  CarritoSlice.actions;
export default CarritoSlice.reducer;
