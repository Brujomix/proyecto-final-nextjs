import React from 'react'
import { HeaderDinamico } from '../Components'

export const metadata={
  title:"Carrito - E_Commerce",
  description:"Pagina para Gestion Productos Carrito"
}

export default function layoutCarrito({children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <HeaderDinamico title={"Carrito Compras"}></HeaderDinamico>
      <>{children}</>
    </div>
  )
}


