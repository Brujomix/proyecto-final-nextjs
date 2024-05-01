"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { deleteCategoria } from "@/app/CRUD/delete";

export function TablaCategorias({ categorias }) {
  const [listaCategorias, setListaCategorias] = useState(categorias);
  return (
    <table className="w-11/12">
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="text-center p-2">Descripcion</td>
          <td className="text-center p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {listaCategorias.map((e) => (
          <tr key={e.cat_iden}>
            <td className="py-2">
              <BotonDinamico>
                <Link href={`/Admin/Categorias/${e.cat_iden}`}>
                  {e.cat_desc}
                </Link>
              </BotonDinamico>
            </td>
            <td className="py-2">
              <BotonDinamico
                onClick={async () =>
                  await deleteCategoria(e.cat_iden).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Categoria Eliminada");
                      const newListaCategorias = listaCategorias.filter(
                        (c) => c.cat_iden !== e.cat_iden
                      );
                      setListaCategorias(newListaCategorias);
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
