import React from "react";
import { SubMenuProductos } from "../Components/SubMenus";

function layoutProductos({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Productos
      </span>
      <div>
        <SubMenuProductos />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layoutProductos;
