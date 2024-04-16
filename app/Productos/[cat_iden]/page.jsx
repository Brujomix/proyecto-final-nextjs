import React, { Suspense } from "react";
import { getProductosbyCategoria } from "@/app/Api/ProductosApi/route";
import { CardProducto } from "@/app/Components";
import { CardProductoSkeleton } from "@/app/Components/Skeletons";
import BotonesCarrito from "@/app/Components/Modal_Botones/BotonesCarrito";

async function filterProductos({ params }) {
  const listaProductosFilter = await getProductosbyCategoria(params.cat_iden);
  return (
    <>
      <h1 className="text-center text-2xl font-semibold italic mb-8">
        Cat NAme
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap gap-3">
        {listaProductosFilter.map((e) => (
          <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
            <CardProducto
              producto={e}
              BtnsCarrito={<BotonesCarrito currentProducto={e} />}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default filterProductos;
