import Link from "next/link";
import React from "react";

export function SubMenuProductos() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className="Link" href={"Admin/Productos/AgregarProducto"}>
        Agregar Producto
      </Link>
    </div>
  );
}
