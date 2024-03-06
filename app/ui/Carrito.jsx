import React from 'react'
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";


export function Carrito() {
  return (
    <Link href={"/Carrito"} className='p-4'>
      <FiShoppingCart size={30}/>
    </Link>
  )
}
