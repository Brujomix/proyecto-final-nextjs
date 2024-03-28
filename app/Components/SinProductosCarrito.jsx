import React from 'react'
import { Link } from "next/link";
import {MdOutlineAddShoppingCart} from "react-icons/md"

export function SinProductosCarrito() {
  return (
    <div className="flex flex-col items-center">
      <Link className={"Link"} href={"/"}>
        <MdOutlineAddShoppingCart color="#999" size={150} />
      </Link>
    </div>
  );
}
