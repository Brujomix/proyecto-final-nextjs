import { getRoles } from '@/app/Api/RolesApi/route'
import { FormAddUserRol } from '@/app/Components'
import React from 'react'

async function AgregarUsuario() {
  const Roles = await getRoles();
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <FormAddUserRol Roles={Roles}/>
    </main>
  )
}

export default AgregarUsuario
