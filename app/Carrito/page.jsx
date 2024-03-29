"use client";
import React from "react";
import { ItemsCarrito, SinItemsCarrito } from "@/app/Components";
import { useSelector } from "react-redux";

export default function CarritoPage() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  return itemsCarrito.length === 0 ? <SinItemsCarrito/> : <ItemsCarrito itemsCarrito={itemsCarrito} />;
}
