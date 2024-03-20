import { configureStore } from "@reduxjs/toolkit";

import Carrito from "./Slices/CarritoSlice.js";
import Estado from "./Slices/EstadoSlice.js";
import Usuario from "./Slices/UsuarioSlice.js";

export const Store = configureStore({
    reducer: {
      Carrito,
      Estado,
      Usuario
    },
    devTools: true,
  });