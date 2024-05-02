import React from "react";
import Link from "next/link";

export function User_NoLogin() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <Link
        className="text-sm italic text-blue-700"
        href={"/Login"}
      >
        Inicia Session
      </Link>
      <Link
        className="text-sm italic text-blue-700"
        href={"/Usuarios/RegistrarUsuario"}
      >
        Registrate
      </Link>
    </div>
  );
}
