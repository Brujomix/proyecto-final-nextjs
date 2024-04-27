"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { deleteCategoria } from "@/app/CRUD/delete";

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
                onClick={async () =>
                  await deleteCategoria({ cat_iden: e.cat_iden }).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Categoria Eliminada");
                    } else {
                      Toast_Dinamico("error", "Intenta Más Tarde");
                    }
                  })
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
