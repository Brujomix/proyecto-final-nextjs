"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { deleteDelivery } from "@/app/CRUD/delete";
import { getDeliverys } from "@/app/CRUD/gets";

export function TablaDeliverys({ deliverys }) {
  const [listaDeliverys, setListaDeliverys] = useState(deliverys);
  return (
    <table className="w-11/12">
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="text-center p-2">Nombre</td>
          <td className="text-center p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {listaDeliverys.map((e) => (
          <tr>
            <td>
              <Link className="Link" href={`/Admin/Deliverys/${e.del_iden}`}>
                {e.del_desc}
              </Link>
            </td>
            <td className="py-2">
              <BotonDinamico
                onClick={async () =>
                  await deleteDelivery(e.del_iden).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Delivery Eliminado");
                      const newListaDelivarys = listaDeliverys.filter(
                        (d) => d.del_iden !== e.del_iden
                      );
                      setListaDeliverys(newListaDelivarys);
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
