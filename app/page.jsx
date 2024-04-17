import React, { Suspense } from "react";
import { getProductosbyPuntos } from "@/app/Api/ProductosApi/route";
import {
  CardProducto,
  CardProductoSkeleton,
  BotonesCarrito,
} from "@/app/Components";

export default async function Home() {
  const listaProductosRanking = await getProductosbyPuntos();
  return (
    <main className="flex flex-col justify-center items-center gap-7">
      <h1 className="text-3xl font-semibold italic tracking-widest">
        Ranking Productos
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap gap-2">
        {listaProductosRanking.map((e) => (
          <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
            <CardProducto
              producto={e}
              BtnsCarrito={<BotonesCarrito currentProducto={e} />}
            />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
