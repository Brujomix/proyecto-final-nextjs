import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export function Usuario() {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios/${"brujomix.bt@gmail.com"}`}>
        <FaUserCircle size={30} />
      </Link>
      <Link href={"/Usuarios/RegistrarUsuario"}>
        <span className="tracking-widest italic text-blue-700">Registrate</span>
      </Link>
    </div>
  );
}
