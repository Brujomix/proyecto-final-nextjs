import React from 'react'
import { getRoles } from '@/app/CRUD/gets';
import { FormAddUserRol } from '@/app/Components'

async function AgregarUsuario() {
  const Roles = await getRoles();
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <FormAddUserRol Roles={Roles}/>
    </main>
  )
}

export default AgregarUsuario
