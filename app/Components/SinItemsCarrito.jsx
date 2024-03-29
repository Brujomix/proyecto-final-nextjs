import React from "react";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";
export function SinItemsCarrito() {
  return (
    <Link href={"/"}>
      <MdAddShoppingCart className="opacity-50" size={150} />
    </Link>
  );
}
