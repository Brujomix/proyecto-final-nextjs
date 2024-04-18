import { FormEditDelivery } from '@/app/Components'
import React from 'react'

function EditarDelivery({params}) {
  return (
    <div>
      <FormEditDelivery del_iden={params.del_iden}/>
    </div>
  )
}

export default EditarDelivery
