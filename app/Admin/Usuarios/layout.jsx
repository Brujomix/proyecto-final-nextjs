import Link from 'next/link'
import React from 'react'

export const metadata={
  title:"Admin Usuarios - E_Commerce",
  description:"Pagina para Gestion de Usuarios"
}

function layoutUsuariosAdmin({children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
    <span className="text-3xl font-semibold italic tracking-widest">
      Gestión Usuarios
    </span>
    <Link className="Link" href={"/Admin/Usuarios/AgregarUsuario"}>Agregar Usuario</Link>
    <div>{children}</div>
  </div>
  )
}

export default layoutUsuariosAdmin
