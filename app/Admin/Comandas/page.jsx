import React, { Suspense } from "react";
import { getComandasFech } from "@/app/Api/ComandasApi/route";
import { CardComanda, CardComandaSkeleton, HeaderDinamico } from "@/app/Components";
import { format } from "date-fns";
import { getProductos } from "@/app/Api/ProductosApi/route";

export const timeGetComandas = ()=>{
  
  const now = format(new Date(), "dd-MM-yyyy");
  let comandas = []
  setTimeout(async () => {
    const currentComandas = await getComandasFech(now);
    comandas = [...currentComandas]
  }, 3600);
  return comandas
}

async function Comandas() {
  const currentComandas = timeGetComandas();
  const Productos = await getProductos()
  return (
    <main className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}>
          
      </HeaderDinamico>
      <div className="w-full flex flex-row justify-around items-center">
        <span className="text-xl italic border p-2 rounded-full bg-blue-300">
          Pendiente
        </span>
        <span className="text-xl italic border p-2 rounded-full bg-slate-300">
          Preparado
        </span>
        <span className="text-xl italic border p-2 rounded-full bg-green-500">
          Enviado
        </span>
      </div>
      <hr className="w-full h-2 border bg-slate-300" />
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {currentComandas.length === 0 ? (
          <span className="text-2xl italic text-center mt-12">No se Encontraron Comandas</span>
        ) : (
          <>
            {currentComandas.map((e) => (
              <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
                <CardComanda comanda={e} prodcutos={Productos} />
              </Suspense>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default Comandas;
