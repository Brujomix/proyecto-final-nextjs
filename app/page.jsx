import React, { Suspense } from "react";
import {
  CardProducto,
  CardProductoSkeleton,
  BotonesCarrito,
  HeaderDinamico,
} from "@/app/Components";
import { getProductosbyPuntos } from "./CRUD/gets";

export const metadata= {
  title: "Ranking Productos - E_Commerce",
  description: "Lista de productos mas vendidos",
  keywords: "Sandwiches, Menus, Comida Rapida, Hamburguesas"
}

export default async function Home() {
  const listaProductosRanking = await getProductosbyPuntos();
  return (
    <main className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Ranking Productos"}>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {listaProductosRanking.map((e) => (
            <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
              <CardProducto
                producto={e}
                BtnsCarrito={<BotonesCarrito currentProducto={e} />}
              />
            </Suspense>
          ))}
        </div>
      </HeaderDinamico>
    </main>
  );
}
