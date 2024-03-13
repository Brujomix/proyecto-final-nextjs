import React from "react";
import { SubMenuCategorias } from "../Components/SubMenus";

function layoutCategorias({ children }) {
  return (
    <div>
      <SubMenuCategorias/>
      <div>{children}</div>
    </div>
  );
}

export default layoutCategorias;
