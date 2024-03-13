import React, { Suspense } from "react";
import { CardProductoSkeleton } from "../Components/Skeletons";
import { CardProducto } from "../Components";
import { getProductos } from "../Api/ProductosApi/route";

async function Productos() {
  const listaProductos = await getProductos();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-3xl font-semibold italic tracking-widest">Lista Productos</span>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {listaProductos.map((e) => (
          <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
            <CardProducto producto={e} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default Productos;
