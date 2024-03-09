import { FormAddUser } from '@/app/ui/Forms'
import React from 'react'

function AgregarUsuario() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold italic tracking-widest">
        Registro Usuario
      </h1>
      <hr />
      <FormAddUser/>
    </div>
  )
}

export default AgregarUsuario
