"use client"
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";

export function SubMenuUsuarios() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className="Link" href={"/Usuarios/Login"}>
        Iniciar Session
      </Link>
      <Link className="Link" href={"/Usuarios/RegistrarUsuario"}>
        Registrarme
      </Link>
      <BotonDinamico className="Link" onClick={()=>{console.log("Eliminar Usuario")}}>
        Eliminar Usuario
      </BotonDinamico>
      <BotonDinamico className="Link" onClick={()=>{console.log("Cerrar Session")}}>
        Cerrar Session
      </BotonDinamico>
    </div>
  );
}
