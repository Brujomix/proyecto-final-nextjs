import React from "react";
import { PrecioCarrito } from "../Utilidades/Utils_Carrito";

export function EnvioCarrito({ itemsCarrito }) {
  return (
    <div>
      <div className="flex flex-row gap-3">
        <span>Precio Carrito: $</span>
        <span className="text-red-500">{PrecioCarrito(itemsCarrito)}</span>
      </div>
      <div className="flex flex-row gap-3">
        <span>Precio Envio: $</span>
        <span className="text-blue-500">getrecio envio</span>
      </div>
    </div>
  );
}
