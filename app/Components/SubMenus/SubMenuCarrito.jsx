import Link from 'next/link'
import React from 'react'

export function SubMenuCarrito() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-4'>
      <Link className='Link' href={"/Carrito/PaymentCarrito"}>Payment Carrito</Link>
    </div>
  )
}
