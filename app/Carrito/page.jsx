"use client";
import React from "react";
import {
  ItemsCarrito,
  Metodos_Envios,
  Metodos_Pagos,
  SinItemsCarrito,
} from "@/app/Components";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CarritoPage() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  return (
    <div>
      {itemsCarrito.length === 0 ? (
        <SinItemsCarrito />
      ) : (
        <div className="flex flex-col justify-center items-center gap-7">
          <ItemsCarrito itemsCarrito={itemsCarrito} />
          <Metodos_Envios />
          <Metodos_Pagos />
          <Link className={"Link"} href={"PaymentCarrito"}>
            Hacer Pedido...
          </Link>
        </div>
      )}
    </div>
  );
}
