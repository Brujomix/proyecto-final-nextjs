"use client"
import React from "react";
import { BotonDinamico } from "../Components";

function UsuariosLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-2">
      {children}
    </div>
  );
}

export default UsuariosLayout;
