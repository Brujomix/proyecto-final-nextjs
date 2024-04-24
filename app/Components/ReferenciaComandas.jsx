import React from 'react'

export function ReferenciaComandas() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
        <span className="text-xl italic border p-2 rounded-full bg-blue-300">
          Pendiente
        </span>
        <span className="text-xl italic border p-2 rounded-full bg-slate-300">
          Preparado
        </span>
        <span className="text-xl italic border p-2 rounded-full bg-green-500">
          Enviado
        </span>
      </div>
  )
}
