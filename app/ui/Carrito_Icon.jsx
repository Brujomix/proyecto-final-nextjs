import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { SumaItemsCarrito } from "@/app/Utilidades/Utils_Carrito";

export function CarritoIcon() {
  const itemsCarrito = []
  return (
    <div className="absolute right-7 top-[-5px] ">
      <Link href={"/Carrito"}>
        <FiShoppingCart size={35} />
      </Link>
      <span className="border-2 border-neutral-400 font-semibold py-1 px-1 rounded-full bg-white">
        {SumaItemsCarrito(itemsCarrito)}
      </span>
    </div>
  );
}
