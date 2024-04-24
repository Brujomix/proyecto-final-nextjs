import React from "react";
import SubMenuReportes, { HeaderDinamico } from "@/app/Components/";


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
