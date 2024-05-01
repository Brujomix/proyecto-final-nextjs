"use client";
import React from "react";
import { FormCarrito, ItemsCarrito, SinItemsCarrito } from "@/app/Components";
import { useSelector } from "react-redux";
import { PrecioCarrito } from "../Utilidades/Utils_Carrito";

export default function CarritoPage() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      {itemsCarrito.length === 0 ? (
        <SinItemsCarrito />
      ) : (
        <div className="space-y-7">
            <ItemsCarrito itemsCarrito={itemsCarrito} />

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <span>Total Carrito </span>
            </div>
            <div>
              <b className="text-red-500">$ {PrecioCarrito(itemsCarrito)}</b>
            </div>
            <div className="col-span-3">
              <span className="text-sm text-blue-700 italic">
                No Incluye Costos de Envios
              </span>
            </div>
          </div>
          <FormCarrito itemsCarrito={itemsCarrito} currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}
