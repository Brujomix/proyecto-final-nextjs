import Link from 'next/link';
import React from 'react'

export function SubMenuDelivery() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className='Link' href={"Admin/Deliverys/AgregarDelivery"}>Agregar Delivery</Link>
    </div>
  );
}
