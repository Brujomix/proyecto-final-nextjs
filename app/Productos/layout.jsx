import React from "react";
import { SubMenuProductos } from "../Components/SubMenus";

function layoutProductos({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <div>{children}</div>
    </div>
  );
}

export default layoutProductos;
