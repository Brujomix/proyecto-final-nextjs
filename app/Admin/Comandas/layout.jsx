import React from "react";
import { HeaderDinamico, ReferenciaComandas } from "@/app/Components";

export const metadata = {
  title: "Admin Comandas - E_Commerce",
  description: "Pagina para Gestion de Comandas",
};

function layoutComandas({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}></HeaderDinamico>
      <ReferenciaComandas />
      <>{children}</>
    </div>
  );
}

export default layoutComandas;
