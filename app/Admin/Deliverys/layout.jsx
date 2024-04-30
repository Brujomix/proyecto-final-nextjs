import { HeaderDinamico } from "@/app/Components";
import Link from "next/link";
import React from "react";

export const metadata={
  title:"Deliverys - E_Commerce",
  description:"Pagina para Gestion de Deliverys"
}

function layoutDelivery({ children }) {
  return (
    <div className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Gestión Deliverys"}>
        <Link className="Link" href={"/Admin/Deliverys/AgregarDelivery"}>
          Agregar Delivery
        </Link>
      </HeaderDinamico>
      <div>{children}</div>
    </div>
  );
}

export default layoutDelivery;
