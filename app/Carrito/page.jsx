"use client";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { CardProductoCarrito, CarritoPrecio } from "../Components";
import { CardProductoSkeleton } from "../Components/Skeletons";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";

function Carrito() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  const isLogin = useSelector((state) => state.Usuario.isLogin);
  return itemsCarrito.length === 0 ? (
    <div className="flex flex-col items-center">
      <Link href={"/"}>
        <MdOutlineAddShoppingCart color="#999" size={150}/>
      </Link>
    </div>
  
  ) : (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="space-y-2">
        {itemsCarrito.map((e) => (
          <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
            <CardProductoCarrito productoCarrito={e} />
          </Suspense>
        ))}
      </div>
      <div>
        <CarritoPrecio itemsCarrito={itemsCarrito} />
      </div>
      <div>
        {isLogin ? (
          <Link href={"/Carrito/EncargarPedido"} className={"Link"}>
            Encargar
          </Link>
        ) : (
          <Link href={"/Usuarios"} className={"Link"}>
            Iniciar Session
          </Link>
        )}
      </div>
    </div>
  );
}

export default Carrito;
