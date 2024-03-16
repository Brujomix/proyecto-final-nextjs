"use client"
import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { SumaItemsCarrito } from "@/app/Utilidades/SumaItemsCarrito";

export function CarritoIcon() {
  const itemsCarrito = useSelector(state => state.Carrito.itemsCarrito)
  return (
    <div>
      <Link href={"/Carrito"} className="p-4">
        <FiShoppingCart size={35} />
      </Link>
      <span className="border-2 border-neutral-400 py-1 px-2 rounded-full bg-white">
        {
          SumaItemsCarrito(itemsCarrito)
        }
      </span>
    </div>
  );
}
