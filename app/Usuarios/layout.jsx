"use client"
import React from "react";
import { BotonDinamico } from "../Components";

function UsuariosLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-2">
      <h1 className="text-3xl font-semibold italic tracking-widest">
        Gestión Usuario
      </h1>
      <hr />
      <div className="w-full flex flex-row justify-around items-center">
        <BotonDinamico onClick={()=>console.log("Cerrar Session")}>Cerrar Session</BotonDinamico>
        <BotonDinamico onClick={()=>console.log("Eliminar Usuario")}>Eliminar Usuario</BotonDinamico>
      </div>
      <hr />
      {children}
    </div>
  );
}

export default UsuariosLayout;
