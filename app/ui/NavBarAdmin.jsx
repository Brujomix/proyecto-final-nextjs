import Link from "next/link";
import React from "react";
import { verificaUserRol } from "../Utilidades/Util_Estado";

export function NavBarAdmin() {
  const currentUser = {}
  return (
    <div
      className={`${verificaUserRol(currentUser)} w-full flex flex-row flex-wrap justify-center items-center p-4 gap-4`}
    >
      <Link className="Link" href="/Admin/Comandas">
        Comandas
      </Link>
      <Link className="Link" href="/Admin/Reportes">
        Reportes
      </Link>
      <Link className="Link" href="/Admin/Categorias">
        Categorias
      </Link>
      <Link className="Link" href="/Admin/Deliverys">
        Deliverys
      </Link>
      <Link className="Link" href="/Admin/ProductosAdmin">
        Productos
      </Link>
      <Link className="Link" href="/Admin/Chat">
        Chat
      </Link>
    </div>
  );
}
