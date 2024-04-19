import Link from "next/link";
import React from "react";

function layoutCategorias({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Categorias
      </span>
      <Link className="Link" href={"/Admin/Productos/AgregarCategoria"}>Agregar Categoria</Link>
      <div>{children}</div>
    </div>
  );
}

export default layoutCategorias;
