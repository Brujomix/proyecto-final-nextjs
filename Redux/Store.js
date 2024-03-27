import { configureStore } from "@reduxjs/toolkit";

import Carrito from "./Slices/CarritoSlice.js";
import EstadoApp from "./Slices/EstadoAppSlice.js";
import Usuario from "./Slices/UsuarioSlice.js";

export const Store = configureStore({
    reducer: {
      Carrito,
      EstadoApp,
      Usuario
    },
    devTools: true,
  });