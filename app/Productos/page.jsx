import React, { Suspense } from "react";
import { CardProductoSkeleton } from "../Components/Skeletons";
import { getProductos } from "../Api/ProductosApi/route";
import { CardProducto } from "../Components";

async function Productos() {
  const listaProductos = await getProductos();
  return (
    <div className="flex flex-row justify-around items-center flex-wrap gap-3">
      {listaProductos.map((e) => (
        <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
          <CardProducto producto={e} />
        </Suspense>
      ))}
    </div>
  );
}

export default Productos;
