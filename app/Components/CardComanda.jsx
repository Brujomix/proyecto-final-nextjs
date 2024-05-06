"use client";
import React, { Suspense } from "react";
import { BotonDinamico, InfoProductos_Comanda } from "@/app/Components";
import {
  avisarEnvio,
  cambiaBackgroundComanda,
  imprimirComanda,
} from "../Utilidades/Util_Comandas";

export async function CardComanda({ comanda }) {
  return (
    <div
      className={`${cambiaBackgroundComanda(
        comanda
      )} grid grid-cols-1 gap-2 p-1 rounded-md`}
    >
      <div className="grid grid-cols-2 gap-1 text-center">
        <span className="text-1xl font-semibold">
          Com. N° {comanda.com_iden}
        </span>
        <div className="grid drid-cols-1 gap-1 text-center">
          <span className="text-sm italic">{comanda.com_date}</span>
          <span className="text-sm italic">{comanda.com_hora}</span>
        </div>
        <span className="text-sm italic text-center col-span-2">
          {"comanda.com_entrega"}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 text-center">
        <span className="underline text-sm">Cliente: </span>
        <span className="text-sm italic">{comanda.UserName}</span>
        <span className="text-sm italic">{comanda.UserTel}</span>
        <span className="text-sm italic text-center col-span-3">
          {comanda.UserDire}
        </span>
      </div>
      <div>
        <InfoProductos_Comanda com_carrito={comanda.com_carrito} />
      </div>
      <div className="flex flex-row justify-around">
        <span>{comanda.DescEnvio}</span>
        <span>{comanda.PagoDesc}</span>
      </div>
      <div className="text-right mr-2">
        <span className="text-sm italic ">Total </span>
        <span className="text-red-700">$ {3125}</span>
      </div>
      <div className="text-sm flex flex-row justify-around p-1 rounded-md">
        <BotonDinamico
          className={"bg-neutral-200 "}
          onClick={() => avisarEnvio(comanda.com_iden)}
        >
          Avisar Envio
        </BotonDinamico>
        <BotonDinamico
          className={"bg-neutral-200 "}
          onClick={() => imprimirComanda(comanda.com_iden)}
        >
          Imprimir
        </BotonDinamico>
      </div>
    </div>
  );
}
