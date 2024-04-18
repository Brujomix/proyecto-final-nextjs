import React from "react";
import { SubMenuDelivery } from "@/app/Components";

function layoutDelivery({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Gestión Deliverys
      </span>
      <SubMenuDelivery />
      <div>{children}</div>
    </div>
  );
}

export default layoutDelivery;
