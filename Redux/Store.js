import { configureStore } from "@reduxjs/toolkit";

import Carrito from "./Slices/CarritoSlice.js";

export const Store = configureStore({
    reducer: {
      Carrito,
    },
    devTools: true,
  });