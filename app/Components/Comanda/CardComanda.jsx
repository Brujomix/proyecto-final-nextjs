"use client"
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { imprimirComanda, avisarEnvio, cambiaBackgroundComanda, infoComanda } from "@/app/Utilidades/Util_Comandas";

export async function CardComanda({ comanda }) {
   
  const CurrentComanda = await infoComanda(comanda)
  console.log(CurrentComanda);

  return (
    <div
      className={`${cambiaBackgroundComanda(comanda)} w-[190px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2`}
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
