"use client";
import Link from "next/link";
import React from "react";
import { verificaUserRol } from "../Utilidades/Util_Estado";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export function NavBarAdmin() {
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  const path = usePathname();
  return (
    <div
      className={`${verificaUserRol(
        currentUser
      )} w-full flex flex-row flex-wrap justify-center items-center p-4 gap-4 border-gray-500 border-b-2`}
    >
      <Link
        className={`Link ${path === "/Admin/Comandas" ? "bg-gray-200" : ""}`}
        href="/Admin/Comandas"
      >
        Comandas
      </Link>
      <Link
        className={`Link ${path === "/Admin/Reportes" ? "bg-gray-200" : ""}`}
        href="/Admin/Reportes"
      >
        Reportes
      </Link>
      <Link
        className={`Link ${path === "/Admin/Categorias" ? "bg-gray-200" : ""}`}
        href="/Admin/Categorias"
      >
        Categorias
      </Link>
      <Link
        className={`Link ${path === "/Admin/Deliverys" ? "bg-gray-200" : ""}`}
        href="/Admin/Deliverys"
      >
        Deliverys
      </Link>
      <Link
        className={`Link ${path === "/Admin/Usuarios" ? "bg-gray-200" : ""}`}
        href="/Admin/Usuarios"
      >
        Usuarios
      </Link>
      <Link
        className={`Link ${path === "/Admin/Productos" ? "bg-gray-200" : ""}`}
        href="/Admin/Productos"
      >
        Productos
      </Link>
    </div>
  );
}
