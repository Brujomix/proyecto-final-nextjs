import React from "react";
import Link from "next/link";

function layoutProductos({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
    <span className="text-3xl font-semibold italic tracking-widest">
      Gestión Productos
    </span>
    <Link className="Link" href={"/Admin/Productos/AgregarProducto"}>Agregar Producto</Link>
    <div>{children}</div>
  </div>
  );
}

export default layoutProductos;
