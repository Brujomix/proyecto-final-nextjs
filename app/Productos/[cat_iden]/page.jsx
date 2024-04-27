import React, { Suspense } from "react";
import {
  CardProductoSkeleton,
  BotonesCarrito,
  CardProducto,
  HeaderDinamico,
} from "@/app/Components";
import { findName } from "@/app/Utilidades/Util_Database";
import { getProductosbyCategoria, getCategorias } from "@/app/CRUD/gets";
async function filterProductos({ params }) {
  const listaProductosFilter = await getProductosbyCategoria(params.cat_iden);
  const Categorias = await getCategorias();
  return (
    <main className="flex justify-center">
      <HeaderDinamico
        title={findName(
          Categorias,
          "cat_iden",
          parseInt(params.cat_iden),
          "cat_desc"
        )}
      >
        <div className="flex justify-center items-center flex-wrap gap-4">
          {listaProductosFilter.map((e) => (
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

export default filterProductos;
