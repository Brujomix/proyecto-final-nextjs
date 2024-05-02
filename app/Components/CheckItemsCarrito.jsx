import React from 'react'
import { PrecioCarrito } from '../Utilidades/Utils_Carrito'
import { FormCarrito, ItemsCarrito } from '.'

export function CheckItemsCarrito({itemsCarrito, currentUser}) {
  return (
      <div className="space-y-7">
            <ItemsCarrito itemsCarrito={itemsCarrito} />
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <span>Total Carrito </span>
            </div>
            <div>
              <b className="text-red-500">$ {PrecioCarrito(itemsCarrito)}</b>
            </div>
            <div className="col-span-3">
              <span className="text-sm text-blue-700 italic">
                No Incluye Costos de Envios
              </span>
            </div>
          </div>
          <FormCarrito itemsCarrito={itemsCarrito} currentUser={currentUser} />
        </div>
  
  )
}
