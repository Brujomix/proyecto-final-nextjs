import React from 'react'
import { FormLogin } from "@/app/Components";

function Usuarios() {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-2xl font-semibold italic tracking-widest">
        Iniciar Sessión
      </span>
      <FormLogin />
    </div>
  )
}

export default Usuarios