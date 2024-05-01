"use client"
import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { SumaItemsCarrito } from "@/app/Utilidades/Utils_Carrito";
import { useSelector } from "react-redux";

export function CarritoIcon() {
  const itemsCarrito = useSelector(state => state.Carrito.itemsCarrito)
  return (
    <div>
      <Link defaultChecked={false} href={"/Carrito"}>
        <FiShoppingCart size={32} />
      </Link>
      <span className="text-sm font-semibold rounded-full bg-white">
        {SumaItemsCarrito(itemsCarrito)}
      </span>
    </div>
  );
}
