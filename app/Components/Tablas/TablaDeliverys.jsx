"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { deleteDelivery } from "@/app/CRUD/delete";

export function TablaDeliverys({ deliverys }) {
  return (
    <table>
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="p-2">Nombre</td>
          <td className="p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {deliverys.map((e) => (
          <tr>
            <td>
              <Link className="Link" href={`/Admin/Deliverys/${e.del_iden}`}>
              {e.del_desc}
              </Link>
            </td>
            <td className="py-2">
              <BotonDinamico
                onClick={async () =>
                  await deleteDelivery({del_iden: e.del_iden}).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Delivery Eliminado");
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
