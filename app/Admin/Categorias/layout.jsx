import React from "react";
import { SubMenuCategorias } from "@/app/Components";

function layoutCategorias({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Categorias
      </span>
      <SubMenuCategorias />
      <div>{children}</div>
    </div>
  );
}

export default layoutCategorias;
