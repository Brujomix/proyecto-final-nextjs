import { HeaderDinamico } from "@/app/Components";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Admin Usuarios - E_Commerce",
  description: "Pagina para Gestion de Usuarios",
};

function layoutUsuariosAdmin({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <HeaderDinamico title={"Gestión Usuarios"}>
        <Link className="Link" href={"/Admin/Usuarios/AgregarUsuario"}>
          Agregar Usuario
        </Link>
      </HeaderDinamico>
      <div>{children}</div>
    </div>
  );
}

export default layoutUsuariosAdmin;
