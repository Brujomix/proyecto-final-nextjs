"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";

export function TablaCategorias({ categoria }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Descripcion</td>
            <td>Editar</td>
            <td>Borrar</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{categoria.cat_desc}</td>
            <td>
              <Link href={"/Categorias/EditarCategoria"}>Editar</Link>
            </td>
            <td>
              <BotonDinamico onClick={()=>console.log("Eliminando Categoria")}>Borrar</BotonDinamico>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
