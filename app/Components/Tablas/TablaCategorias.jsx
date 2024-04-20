"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";
import { CiTrash, CiEdit } from "react-icons/ci";

export function TablaCategorias({ categorias }) {
  return (

      <table>
        <thead className="bg-neutral-200">
          <tr className="font-semibold italic tracking-wider">
            <td className="p-2">Descripcion</td>
            <td className="p-2">Editar</td>
            <td className="p-2">Borrar</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {categorias.map((e) => (
            <tr>
              <td>{e.cat_desc}</td>
              <td>
                <Link href={`/Categorias/${e.cat_iden}`}>
                  <CiEdit size={20}/>
                </Link>
              </td>
              <td>
                <BotonDinamico
                  onClick={() =>
                    console.log(`Eliminando Categoria ${e.cat_iden}`)
                  }
                >
                  <CiTrash size={20}/>
                </BotonDinamico>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  );
}
