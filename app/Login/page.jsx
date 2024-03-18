import React from "react";
import { FormLogin } from "@/app/Components/Forms";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Iniciar Sessión
      </span>
      <FormLogin />
    </div>
  );
}

export default Login;
