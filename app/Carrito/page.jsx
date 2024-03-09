import Link from 'next/link'
import React from 'react'

function Carrito() {
  return (
    <div className='p-2 flex flex-col justify-center items-center gap-4'>
      <span className="text-3xl font-semibold italic tracking-widest">Productos en Carrito</span>
       <Link href={"/PaymentCarrito"}>
        <span className="border-2 border-neutral-300 p-2 rounded-md tracking-widest italic text-blue-700">Pagar Carrito</span>
      </Link>
    </div>
  )
}

export default Carrito