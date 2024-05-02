import React from "react";
import { FormLogin, HeaderDinamico } from "@/app/Components";

export const metadata = {
  title: "Login - E_Commerce",
  descripcion: "Pagina de Login Usuario",
};

function pageLogin() {

  return (
    <div className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Login Usuario"}></HeaderDinamico>
      <div className="flex justify-center">
        <FormLogin />
      </div>
    </div>
  );
}

export default pageLogin;
