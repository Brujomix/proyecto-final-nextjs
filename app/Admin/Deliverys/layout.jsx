import Link from "next/link";
import React from "react";

function layoutDelivery({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Deliverys
      </span>
      <Link className="Link" href={"/Admin/Productos/AgregarDelivery"}>Agregar Delivery</Link>
      <div>{children}</div>
    </div>
  );
}

export default layoutDelivery;
