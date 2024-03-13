import Link from 'next/link'
import React from 'react'

export function SubMenuCategorias() {
  return (
    <div>
      <Link href={"/Categoria/AgregarCategoria"}>Agregar Categoria</Link>
      <Link href={"/Categoria/PrecioCategoria"}>Precio Por Categoria</Link>
      <Link href={"/Categoria/EditarCategoria"}>Editar Categoria</Link>
    </div>
  )
}
