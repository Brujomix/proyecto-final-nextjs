import Link from 'next/link'
import React from 'react'

export function NavBarAdmin() {
  return (
    <div className='w-full flex flex-row justify-around items-center p-4'>
      <Link href="/Comandas">Comandas</Link>
      <Link href="/Reportes">Reportes</Link>
      <Link href="/Categorias">Categorias</Link>
      <Link href="/Deliverys">Deliverys</Link>
      <Link href="/Productos">Productos</Link>
      <Link href="/Chat">Chat</Link>
    </div>
  )
}
