import Link from 'next/link';
import React from 'react'

export function SubMenuDelyvery() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className='Link' href={"/AgregarDelivery"}>Agregar Delibery</Link>
    </div>
  );
}
