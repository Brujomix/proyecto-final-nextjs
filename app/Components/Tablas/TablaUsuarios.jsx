"use client";
import React from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { findName } from "@/app/Utilidades/Util_Database";
import { deleteUsuario } from "@/app/CRUD/delete";

export function TablaUsuarios({ Usuarios, Roles }) {

  return (
    <table>
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="p-2">Nombre</td>
          <td className="p-2">Rol</td>
          <td className="p-2">Email</td>
          <td className="p-2">Dire</td>
          <td className="p-2">Tel</td>
          <td className="p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {Usuarios.map((e) => (
          <tr key={e.us_iden}>
            <td>{e.us_name}</td>
            <td>{findName(Roles, "ro_iden", e.us_ro_iden, "ro_desc")}</td>
            <td>{e.us_email}</td>
            <td>{e.us_dire}</td>
            <td>{e.us_tel}</td>
            <td>
              <BotonDinamico
                onClick={async () => {
                  await deleteUsuario(e.us_iden).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Usuario Eliminado");
                    } else {
                      Toast_Dinamico("error", "Intenta Más Tarde");
                    }
                  });
                }}
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
