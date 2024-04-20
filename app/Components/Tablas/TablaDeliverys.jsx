"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";
import { CiTrash, CiEdit } from "react-icons/ci";

export function TablaDeliverys({ deliverys }) {
  return (

      <table >
        <thead className="bg-neutral-200">
          <tr className="font-semibold italic tracking-wider">
            <td className="p-2">Nombre</td>
            <td className="p-2">Editar</td>
            <td className="p-2">Borrar</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {deliverys.map((e) => (
            <tr>
              <td>{e.del_desc}</td>
              <td>
                <Link href={`/Deliverys/${e.del_iden}`}>
                  <CiEdit size={20}/>
                </Link>
              </td>
              <td>
                <BotonDinamico
                  onClick={() =>
                    console.log(`Eliminando Categoria ${e.del_iden}`)
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

