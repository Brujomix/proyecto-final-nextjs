"use client";
import React from "react";
import { BotonDinamico } from "..";
import { imprimirComanda, avisarEnvio } from "@/app/Utilidades/Util_Comandas";
import { UserComanda } from ".";

export function CardComanda({ comanda }) {
  const cambiaBackground = () => {
    switch (comanda.com_escom_iden) {
      case 2:
        return "bg-slate-300";
      case 3:
        return "bg-green-500";
      default:
        return "bg-orange-300";
    }
  };

  return (
    <div
      className={`${cambiaBackground()} w-[180px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2`}
    >
      <span className="text-2xl">N° {comanda.com_iden}</span>
      <span>Hora: {comanda.com_date}</span>
      <div className="flex flex-col justify-center items-center g-2">
        <span>Datos del Cliente:</span>
        {/* <UserComanda id_user={comanda.com_us_iden} /> */}
      </div>
      <div>
        {comanda.com_carrito.map((e) => (
          <div key={e.pro_iden}>
            <span>{e.pro_iden}</span>
            <span>{e.Cantidad}</span>
          </div>
        ))}
      </div>
      <span>{comanda.com_entrega}</span>
      <div className="flex flex-row justify-center items-center gap-2">
        <span>Total:</span>
        <span className="text-red-500 font-semibold">$ 13520</span>
      </div>
      <div className="flex flex-row justify-around">
        <BotonDinamico onClick={() => avisarEnvio(comanda.com_us_iden)}>
          Avisar Envio
        </BotonDinamico>
        <BotonDinamico onClick={() => imprimirComanda(comanda.com_iden)}>
          Imprimir
        </BotonDinamico>
      </div>
    </div>
  );
}
