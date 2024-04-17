"use client"
import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { SumaItemsCarrito } from "@/app/Utilidades/Utils_Carrito";
import { useSelector } from "react-redux";

export function CarritoIcon() {
  const itemsCarrito = useSelector(state => state.Carrito.itemsCarrito)
  return (
    <div className="absolute right-7 top-[-5px] ">
      <Link defaultChecked={false} href={"/Carrito"}>
        <FiShoppingCart size={30} />
      </Link>
      <span className="border-2 border-neutral-400 text-sm font-semibold py-1 px-1 rounded-full bg-white">
        {SumaItemsCarrito(itemsCarrito)}
      </span>
    </div>
  );
}
