import { FormAddUser } from '@/app/ui/Forms'
import React from 'react'

function AgregarUsuario() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-3xl font-semibold italic tracking-widest">
        Registro Usuario
      </span>
      <hr />
      <FormAddUser/>
    </div>
  )
}

export default AgregarUsuario
