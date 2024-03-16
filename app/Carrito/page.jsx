"use client";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { CardProductoCarrito } from "../Components";
import { CardProductoSkeleton } from "../Components/Skeletons";

function Carrito() {
  const itemsCarrito = useSelector(state => state.Carrito.itemsCarrito)
  return itemsCarrito.length === 0 ? <div>No items carrito</div> : (
    <div>
      {itemsCarrito.map((e) => (
        <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
          <CardProductoCarrito productoCarrito={e} />
        </Suspense>
      ))}
    </div>
  );
}

export default Carrito;
