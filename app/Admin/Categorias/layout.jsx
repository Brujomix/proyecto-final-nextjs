import { HeaderDinamico } from "@/app/Components";
import Link from "next/link";
import React from "react";

function layoutCategorias({ children }) {
  return (
    <div className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Gestión Categorias"}>
        <Link className="Link" href={"/Admin/Categorias/AgregarCategoria"}>
          Agregar Categoria
        </Link>
      </HeaderDinamico>
      <div>{children}</div>
    </div>
  );
}

export default layoutCategorias;
