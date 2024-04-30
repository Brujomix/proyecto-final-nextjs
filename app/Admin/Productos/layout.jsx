import React from "react";
import Link from "next/link";
import { HeaderDinamico } from "@/app/Components";

export const metadata={
  title:"Admin Productos - E_Commerce",
  description:"Pagina para Gestion de Productos"
}

function layoutProductos({ children }) {
  return (
    <div className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Gestión Productos"}>
        <Link className="Link" href={"/Admin/Productos/AgregarProducto"}>
          Agregar Producto
        </Link>
      </HeaderDinamico>
      <div>{children}</div>
    </div>
  );
}

export default layoutProductos;
