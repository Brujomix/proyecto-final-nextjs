"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";

export function TablaCategorias({ categorias }) {
  return (
    <div>
      <table>
        <thead className="bg-neutral-200">
          <tr>
            <td>Descripcion</td>
            <td>Editar</td>
            <td>Borrar</td>
          </tr>
        </thead>
        <tbody>
          {categorias.map((e) => (
            <tr>
              <td>{e.cat_desc}</td>
              <td>
                <Link href={`/Categorias/EditarCategoria/${e.cat_iden}`}>
                  Editar
                </Link>
              </td>
              <td>
                <BotonDinamico
                  onClick={() =>
                    console.log(`Eliminando Categoria ${e.cat_iden}`)
                  }
                >
                  Borrar
                </BotonDinamico>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
