import React, { Suspense } from "react";
import { getProductos } from "@/app/Api/ProductosApi/route";
import { TablaProductos, TablaGenericaSkeleton } from "@/app/Components";

async function ProductosAdmin() {
  const listaProductos = await getProductos();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        <Suspense fallback={<TablaGenericaSkeleton />}>
          <TablaProductos Productos={listaProductos} />
        </Suspense>
      </div>
    </div>
  );
}

export default ProductosAdmin;
