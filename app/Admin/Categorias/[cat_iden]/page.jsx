import { FormEditCategoria } from '@/app/Components'
import React from 'react'

function EditarCategoria({params}) {
  return (
    <main className='flex justify-center'>
       <FormEditCategoria cat_iden={params.cat_iden}/>
    </main>
  )
}

export default EditarCategoria
