import React, { Suspense } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { getComandasFech } from "@/app/CRUD/gets";

async function Comandas() {

  const listaComandas = await getComandasFech();
  console.log(listaComandas);
  return (
    <main className="flex flex-row flex-wrap justify-center items-center gap-2 p-2">
      {listaComandas.map((e) => (
        <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
          <CardComanda comanda={e} />
        </Suspense>
      ))}
    </main>
  );
}

export default Comandas;
