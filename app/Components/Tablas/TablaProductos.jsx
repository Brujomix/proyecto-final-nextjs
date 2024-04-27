"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";
import { deleteProducto } from "@/app/CRUD/delete";

export function TablaProductos({ Productos }) {
  return (
    <table>
      <thead className="bg-neutral-200">
        <tr className="font-semibold italic tracking-wider">
          <td className="p-2">Producto</td>
          <td className="p-2">Precio</td>
          <td className="p-2">Borrar</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {Productos.map((e) => (
          <tr key={e.pro_iden}>
            <td className="py-2">
              <BotonDinamico>
                <Link className="text-sm" href={`/Admin/Productos/${e.pro_iden}`}>
                  {e.pro_name}
                </Link>
              </BotonDinamico>
            </td>
            <td>$ {e.pro_precio}</td>
            <td className="py-2">
              <BotonDinamico
                onClick={async () => {
                  await deleteProducto({pro_iden: e.pro_iden}).then((res) => {
                    if (res.status === 200) {
                      Toast_Dinamico("success", "Producto Eliminado");
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
