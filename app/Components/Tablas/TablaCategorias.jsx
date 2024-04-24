"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";

export function TablaCategorias({ categorias }) {
  return (
    <table>
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="p-2">Descripcion</td>
          <td className="p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {categorias.map((e) => (
          <tr>
            <td className="py-2">
              <BotonDinamico>
                <Link href={`/Categorias/${e.cat_iden}`}>{e.cat_desc}</Link>
              </BotonDinamico>
            </td>
            <td className="py-2">
              <BotonDinamico
                onClick={() =>
                  console.log(`Eliminando Categoria ${e.cat_iden}`)
                }
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
