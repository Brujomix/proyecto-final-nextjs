import { FormEditCategoria } from '@/app/Components/Forms'
import React from 'react'

function EditarCategoria({params}) {
  return (
    <div>
       <FormEditCategoria cat_iden={params.cat_iden}/>
    </div>
  )
}

export default EditarCategoria
