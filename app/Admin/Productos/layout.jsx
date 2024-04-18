import React from "react";
import { SubMenuProductos } from "@/app/Components";

function layoutProductos({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
    <span className="text-3xl font-semibold italic tracking-widest">
      Gestión Productos
    </span>
    <SubMenuProductos />
    <div>{children}</div>
  </div>
  );
}

export default layoutProductos;
