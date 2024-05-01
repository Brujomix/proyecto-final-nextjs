import React from "react";
import { BotonDinamico } from "@/app/Components";
import {
  avisarEnvio,
  cambiaBackgroundComanda,
  imprimirComanda,
  infoProductosCarrito,
} from "../Utilidades/Util_Comandas";
import { getEnvio, getPago, getUsuario } from "@/app/CRUD/gets";

export async function CardComanda ({ comanda }) {
  const pago = await getPago(comanda.com_pago_iden);
  const envio = await getEnvio(comanda.com_env_iden);
  const infoProductos = await infoProductosCarrito(comanda.com_carrito);
  const usuario = await getUsuario(comanda.com_us_iden);
  return (
    <div
      className={`${cambiaBackgroundComanda(
        comanda
      )} w-[190px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-1`}
    >
      <span className="text-2xl">Comanda N° {comanda.com_iden}</span>
      <div className="text-sm italic flex justify-around items-center gap-2">
        <span>{comanda.com_date}</span>
        <span>{comanda.com_hora}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 text-sm italic text-center">
        <span className="underline">Datos del Cliente:</span>
        <span>{usuario.us_name}</span>
        <span>{usuario.us_dire}</span>
        <span>{usuario.us_tel}</span>
      </div>
      <div>
        <span className="underline">Productos:</span>
        {infoProductos.map((e) => (
          <div
            className="grid grid-cols-2 italic text-sm text-center gap-2"
            key={e}
          >
            <span>Nombre</span>
            <span>Cantidad</span>
            <span className="text-semibold">{e.infoProducto.pro_name}</span>
            <span className="text-semibold">{e.Cantidad}</span>
          </div>
        ))}
      </div>
      <span>{comanda.com_entrega}</span>
      <div className="grid grid-cols-2 gap-1 text-center italic">
        <span>{envio.env_desc}</span>
        <span>{pago.pago_desc}</span>
        <div className="flex justify-around col-span-2">
          <span>Total</span>
          <span className="text-red-700">$ {3125}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 text-sm">
        <BotonDinamico onClick={() => avisarEnvio(comanda.com_iden)}>
          Avisar Envio
        </BotonDinamico>
        <BotonDinamico onClick={() => imprimirComanda(comanda.com_iden)}>
          Imprimir
        </BotonDinamico>
      </div>
    </div>
  );
};
