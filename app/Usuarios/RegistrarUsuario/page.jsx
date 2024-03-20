import { FormAddUser } from "@/app/Components/Forms";
import React from "react";

function AgregarUsuario() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-2xl font-semibold italic tracking-widest">
        Registrarme
      </span>
      <FormAddUser />
    </div>
  );
}

export default AgregarUsuario;
