import { configureStore } from "@reduxjs/toolkit";

import Carrito from "./Slices/CarritoSlice.js";
import Estado from "./Slices/EstadoSlice.js";

export const Store = configureStore({
    reducer: {
      Carrito,
      Estado
    },
    devTools: true,
  });