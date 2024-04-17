import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

export function Metodos_Envios() {
  return (
    <div className="text-center">
      <span className="underline italic font-semibold">Selecciona Metodo de Entrega:</span>
      <div className="mt-5 flex flex-row justify-center items-center gap-7">
        <div className="flex flex-col items-center text-sm italic">
          <IoHomeOutline size={50} />
          <figcaption>Local</figcaption>
        </div>
        <div className="flex flex-col items-center text-sm italic">
          <MdOutlineDeliveryDining size={50} />
          <figcaption>Delivery</figcaption>
        </div>
      </div>
    </div>
  );
}
