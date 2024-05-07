"use client";
import React from "react";
import { FormCarrito, ItemsCarrito, SinItemsCarrito } from "@/app/Components";
import { useSelector } from "react-redux";

export default function CarritoPage() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  return (
    <div>
      {itemsCarrito.length === 0 ? (
        <SinItemsCarrito />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <ItemsCarrito />
          <FormCarrito />
        </div>
      )}
    </div>
  );
}
