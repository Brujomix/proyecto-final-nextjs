import React from 'react'

export function CardComandaSkeleton() {
  return (
    <div className="w-[180px] opacity-50 flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2 bg-white">
      <span className="text-2xl">N° {"***"}</span>
      <span>{"Hora"}</span>
      <div className="flex flex-col justify-center items-center g-2">
        <span>Datos del Cliente:</span>
        <div className="flex flex-col justify-start items-start border p-2">
          <span className="text-red-500 font-semibold">{"Nombre"}</span>
          <span >{"Direccion"}</span>
          <span >{"telefono"}</span>
        </div>
      </div>
      <div className="border rounded-md border-neutral-900 w-24 h-12">
      </div>
      <span>Entrega</span>
      <div className="flex flex-row justify-center items-center gap-2">
        <span>Total:</span>
        <span className="text-red-500 font-semibold">$ ****</span>
      </div>
      <div className="flex flex-row justify-around">
        <div className="border rounded-md border-neutral-900 w-16 h-5"></div>
        <div className='border rounded-md border-neutral-900 w-16 h-5'></div>
      </div>
    </div>
  )
}
