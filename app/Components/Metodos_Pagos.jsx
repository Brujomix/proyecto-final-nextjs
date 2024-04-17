import React from "react";
import { SiMercadopago } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import { CiBank } from "react-icons/ci";

export function Metodos_Pagos() {
  return (
    <div className="text-center">
      <span className="underline italic font-semibold">Selecciona Metodo de Pago:</span>
      <div className="mt-5 flex flex-row justify-center items-center gap-7">
        <div className="flex flex-col items-center text-sm italic">
          <SiMercadopago size={50} />
          <figcaption>Mercadopago</figcaption>
        </div>
        <div className="flex flex-col items-center text-sm italic">
          <BsCashCoin size={50} />
          <figcaption>Efectivo</figcaption>
        </div>
        <div className="flex flex-col items-center text-sm italic">
          <CiBank size={50} />
          <figcaption>Transferencia</figcaption>
        </div>
      </div>
    </div>
  );
}
