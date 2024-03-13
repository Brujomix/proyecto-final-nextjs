import React, { Suspense } from 'react'
import { getComandas } from '../Api/ComandasApi/route'
import { CardComanda } from '../Components';
import { CardComandaSkeleton } from '../Components/Skeletons';

async function Comandas() {
  const currentComandas = await getComandas();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-3xl font-semibold italic tracking-widest">Comandas</span>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {currentComandas.map((e) => (
          <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
            <CardComanda comanda={e} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}

export default Comandas
