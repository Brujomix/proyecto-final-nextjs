"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export function NavBarAdmin() {
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  return (
    <div
      className={`${
        currentUser.us_ro_iden === 1 || Object.keys(currentUser).length === 0
          ? "hidden"
          : "block"
      } w-full flex flex-row flex-wrap justify-center items-center p-4 gap-4`}
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
