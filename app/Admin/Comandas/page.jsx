import React, { Suspense } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { getComandasFech } from "@/app/CRUD/gets";

async function Comandas() {

  const listaComandas = await getComandasFech();

  return (
    <main className="flex flex-row flex-wrap justify-around items-center gap-2 p-2">
      {listaComandas.length === 0 ? (
        <div className="text-center">
          <span className="font-semibold text-ms italic tracking-widest">No se Han Registrado Comandas</span>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-2">
          {listaComandas.map((e) => (
            <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
              <CardComanda comanda={e} />
            </Suspense>
          ))}
        </div>
      )}
    </main>
  );
}

export default Comandas;
