"use client";
import React, { useState } from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { findName } from "@/app/Utilidades/Util_Database";
import { deleteUsuario } from "@/app/CRUD/delete";

export function TablaUsuarios({ Usuarios, Roles }) {
  const [listaUsuarios, setListaUsuarios] = useState(Usuarios);
  return (
    <table className="w-11/12">
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="text-center p-2">Nombre</td>
          <td className="text-center p-2">Rol</td>
          <td className="text-center p-2">Dire</td>
          <td className="text-center p-2">Tel</td>
          <td className="text-center p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {listaUsuarios.map((e) => (
          <div key={e.us_iden}>
            <tr>
              <td className="text-center" colSpan={5}>
                {e.us_email}
              </td>
            </tr>
            <tr className="bg-gray-200" key={e.us_iden}>
              <td className="py-2 text-sm italic">{e.us_name}</td>
              <td className="py-2 text-sm italic">
                {findName(Roles, "ro_iden", e.us_ro_iden, "ro_desc")}
              </td>
              <td className="py-2 text-sm italic">{e.us_dire}</td>
              <td className="py-2 text-sm italic">{e.us_tel}</td>
              <td className="py-2 text-sm italic">
                <BotonDinamico
                  onClick={async () => {
                    await deleteUsuario(e.us_iden).then((res) => {
                      if (res.status === 200) {
                        Toast_Dinamico("success", "Usuario Eliminado");
                        const newListUsuarios = listaUsuarios.filter(
                          (u) => u.us_iden !== e.us_iden
                        );
                        setListaUsuarios(newListUsuarios);
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
          </div>
        ))}
      </tbody>
    </table>
  );
}
