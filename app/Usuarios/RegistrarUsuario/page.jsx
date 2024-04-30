import { FormAddUser, HeaderDinamico } from "@/app/Components";
import React from "react";

export const metadata={
  title:"Registrarme - E_Commerce",
  description:"Creacion de un nuevo usuario de la web"
}

function RegistrarUsuario() {
  return (
    <main className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Registrarme"}></HeaderDinamico>
      <div className="flex justify-center">
        <FormAddUser />
      </div>
    </main>
  );
}

export default RegistrarUsuario;
