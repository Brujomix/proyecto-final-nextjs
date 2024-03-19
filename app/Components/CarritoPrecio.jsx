import React from "react";
import { PrecioCarrito } from "../Utilidades/Utils_Carrito";
import { useSelector } from "react-redux";

export function CarritoPrecio() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div>
        <span>Total a Pagar $ </span>
        <strong className="text-lg italic text-red-600">{PrecioCarrito(itemsCarrito)}</strong>
      </div>
      <span className="text-sm italic text-blue-700">Precio Carrito sin Envío</span>
    </div>
  );
}
