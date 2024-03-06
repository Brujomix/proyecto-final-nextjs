import React from 'react'

export function MenuUssuarios() {
    const menu = [
        "Cerrar session", "Eliminar Cuenta"
    ]
  return (
    <div className='w-full flex justify-around'>{menu.map(e=>{
        return <button key={e} className='border p-2 bg-slate-300 rounded-md'>{e}</button>
    })}</div>
  )
}
