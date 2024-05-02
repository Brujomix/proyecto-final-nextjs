import React from "react";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";
export function SinItemsCarrito() {
  return (
    <Link href={"/"}>
      <div className="grid grid-cols-1 text-center">
        <MdAddShoppingCart className="opacity-50" size={150} />
        <figcaption className="italic text-sm">Agrega Productos al Carrito</figcaption>
      </div>
    </Link>
  );
}
