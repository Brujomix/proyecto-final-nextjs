"use client"
import { FormAddUser } from "@/app/Components/Forms";
import React from "react";

function AgregarUsuario() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-3xl font-semibold italic tracking-widest">
        Registro Usuario
      </span>
      <span>Ingresa tus datos</span>
      <FormAddUser />
    </div>
  );
}

export default AgregarUsuario;
