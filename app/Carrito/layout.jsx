import React from 'react'

export default function layoutCarrito({children}) {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <span className="text-3xl font-semibold italic tracking-widest">
        Carrito Compras
      </span>
      <div>{children}</div>
    </div>
  )
}


