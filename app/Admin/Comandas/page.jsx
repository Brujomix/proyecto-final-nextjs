import React, { Suspense } from "react";
import { getComandas } from "@/app/Api/ComandasApi/route";
import { CardComanda } from "@/app/Components/Comanda";
import { CardComandaSkeleton } from "@/app/Components/Skeletons";

async function Comandas() {
  const currentComandas = await getComandas();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-3xl font-semibold italic tracking-widest">
        Comandas
      </span>
      <div className="w-full flex flex-row justify-around items-center">
        <span className="text-2xl italic border p-2 rounded-full bg-orange-300">Pendiente</span>
        <span className="text-2xl italic border p-2 rounded-full bg-slate-300">Preparado</span>
        <span className="text-2xl italic border p-2 rounded-full bg-green-500">Enviado</span>
      </div>
      <hr className="w-full h-2 border bg-slate-300" />
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {currentComandas.map((e) => (
          <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
            <CardComanda comanda={e} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default Comandas;
