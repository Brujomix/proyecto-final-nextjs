import React from "react";
import SubMenuReportes from "@/app/Components/SubMenus/SubMenuReportes";

function layoutReportes({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Reportes
      </span>
      <SubMenuReportes />
      <div>{children}</div>
    </div>
  );
}

export default layoutReportes;
