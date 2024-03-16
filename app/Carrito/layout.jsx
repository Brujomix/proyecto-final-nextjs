import React from 'react'
import { SubMenuCarrito } from '../Components/SubMenus/SubMenuCarrito'

function layoutCarrito({children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Carrito Compras
      </span>
      <SubMenuCarrito/>
      <div>{children}</div>
    </div>
  )
}

export default layoutCarrito
