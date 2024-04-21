"use client"
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { imprimirComanda, avisarEnvio, cambiaBackgroundComanda, infoComanda, infoProductosCarrito } from "@/app/Utilidades/Util_Comandas";

export async function CardComanda({ comanda, prodcutos }) {
  
  const CurrentComanda = await infoComanda(comanda)
  const CurrentProductosInfo = infoProductosCarrito(comanda.com_carrito, prodcutos)
  
  return (
    <div
      className={`${cambiaBackgroundComanda(
        comanda
      )} w-[190px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2`}
    >
      <span className="text-2xl">N° {comanda.com_iden}</span>
      <span>Fecha: {comanda.com_date}</span>
      <span>Hora: {comanda.com_hora}</span>
      <div className="flex flex-col justify-center items-center g-2">
        <span>Datos del Cliente:</span>
        {/* <UserComanda id_user={comanda.com_us_iden} /> */}
      </div>
      <div>
        <span>Productos:</span>
        {CurrentProductosInfo.map((e) => (
          <div className="grid grid-cols-2 italic text-sm text-center gap-2" key={e}>
            <span>Nombre</span>
            <span>Cantidad</span>
            <span className="text-semibold">{e.infoProducto.pro_name}</span>
            <span className="text-semibold">{e.Cantidad}</span>
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
