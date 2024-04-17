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
  const currentUser = useSelector(state=> state.Usuario.currentUser)
  return (
    <div>
      {itemsCarrito.length === 0 ? (
        <SinItemsCarrito />
      ) : (
        <div className="flex flex-col justify-center items-center gap-7">
          <ItemsCarrito itemsCarrito={itemsCarrito} />
          <Metodos_Envios />
          <Metodos_Pagos />
          {currentUser === null ? <div className="border border-red-300 rounded-md p-2 italic text-sm bg-red-400">Debes Iniciar Session</div> : <Link className="Link" href={"PaymentCarrito"}>
            Hacer Pedido...
          </Link> }
          
        </div>
      )}
    </div>
  );
}
