import React from "react";
import { SubMenuUsuarios } from "../Components/SubMenus";

function layoutUsuario({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Usuario
      </span>
      <SubMenuUsuarios />
      <div>{children}</div>
    </div>
  );
}

export default layoutUsuario;
