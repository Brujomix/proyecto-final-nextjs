import React from "react";
import { HeaderDinamico } from "@/app/Components/";

export const metadata={
  title:"Admin Reportes - E_Commerce",
  description:"Pagina para Gestion de Reportes"
}

function layoutReportes({ children }) {
  return (
    <div className="grid grid-cols-1 gap-7">
    <HeaderDinamico title={"Reportes"}>
     header reportes
    </HeaderDinamico>
    <div>{children}</div>
  </div>
  );
}

export default layoutReportes;
