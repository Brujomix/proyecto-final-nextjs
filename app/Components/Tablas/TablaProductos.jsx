"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";
import { CiTrash, CiEdit } from "react-icons/ci";

export function TablaProductos({ Productos }) {
  return (
    <table className="w-[320px]">
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="p-2">Iden</td>
          <td className="p-2">Producto</td>
          <td className="p-2">Precio</td>
          <td className="p-2">Editar</td>
          <td className="p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {Productos.map((e) => (
          <tr key={e.pro_iden}>
            <td>{e.pro_iden}</td>
            <td>{e.pro_name}</td>
            <td>$ {e.pro_precio}</td>
            <td>
              <Link href={`/Productos/${e.pro_iden}`}>
                <CiEdit size={20} />
              </Link>
            </td>
            <td>
              <BotonDinamico
                onClick={() => console.log(`Eliminando Producto ${e.pro_iden}`)}
              >
                <CiTrash size={20} />
              </BotonDinamico>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
