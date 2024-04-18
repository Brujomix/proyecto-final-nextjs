import Link from 'next/link'
import React from 'react'

export function SubMenuCategorias() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-4'>
      <Link className='Link' href={"Admin/Categorias/AgregarCategoria"}>Agregar Categoria</Link>
      <Link className='Link' href={"Admin/Categorias/PrecioCategoria"}>Precio Por Categoria</Link>
    </div>
  )
}
