import React from 'react'

export function InfoProductos_Comanda({com_carrito}) {

  return (
    <div>
        <span className="underline text-sm">Productos:</span>
        {com_carrito.map((e) => (
          <div
          className="grid grid-cols-2 italic text-sm text-center gap-1"
          key={e}
          >
            <span className='text-sm font-semibold'>Nombre</span>
            <span className='text-sm font-semibold'>Cantidad</span>
            <span className="text-semibold">{"Producto nombre"}</span>
            <span className="text-semibold">{e.Cantidad}</span>
          </div>
        ))}
      </div>
  )
}
