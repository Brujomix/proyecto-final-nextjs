import { FormEditDelivery } from '@/app/Components'
import React from 'react'

function EditarDelivery({params}) {
  return (
    <main className='flex justify-center'>
      <FormEditDelivery del_iden={params.del_iden}/>
    </main>
  )
}

export default EditarDelivery
