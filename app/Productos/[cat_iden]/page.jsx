import React, { Suspense } from "react";
import { getProductosbyCategoria } from "@/app/Api/ProductosApi/route";
import { CardProductoSkeleton, BotonesCarrito, CardProducto } from "@/app/Components";

async function filterProductos({ params }) {
  const listaProductosFilter = await getProductosbyCategoria(params.cat_iden);
  return (
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
  )
}

export default filterProductos;
