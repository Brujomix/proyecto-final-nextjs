import { FormAddUser, HeaderDinamico } from "@/app/Components";
import React from "react";

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
