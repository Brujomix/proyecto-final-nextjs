import React from "react";
import { MenuUssuarios } from "../Components";

function usuariosLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-2">
      <h1 className="text-3xl font-semibold italic tracking-widest">
        Gestión Usuario
      </h1>
      <hr />
      <MenuUssuarios />
      <hr />
      {children}
    </div>
  );
}

export default usuariosLayout;
