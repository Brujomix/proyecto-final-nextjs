"use client"
import React from "react";
import { CardProductoCarrito } from "@/app/Components";
import { useSelector } from "react-redux";

export function ItemsCarrito() {
  let itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="space-y-2">
        {itemsCarrito.map((e) => (
          <CardProductoCarrito key={e} productoCarrito={e} />
        ))}
      </div>
    </div>
  );
}
