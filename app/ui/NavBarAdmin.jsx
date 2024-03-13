import Link from "next/link";
import React from "react";

export function NavBarAdmin() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-center p-4 gap-4">
      <Link className="Link" href="/Comandas">
        Comandas
      </Link>
      <Link className="Link" href="/Reportes">
        Reportes
      </Link>
      <Link className="Link" href="/Categorias">
        Categorias
      </Link>
      <Link className="Link" href="/Deliverys">
        Deliverys
      </Link>
      <Link className="Link" href="/Productos">
        Productos
      </Link>
      <Link className="Link" href="/Chat">
        Chat
      </Link>
    </div>
  );
}
