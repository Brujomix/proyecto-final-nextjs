import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export function Carrito() {
  return (
    <div>
      <Link href={"/Carrito"} className="p-4">
        <FiShoppingCart size={35} />
      </Link>
      <span className="border-2 border-neutral-400 py-1 px-2 rounded-full bg-white">
        1
      </span>
    </div>
  );
}
