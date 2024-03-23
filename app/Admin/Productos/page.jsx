import React, { Suspense } from "react";
import { TablaGenericaSkeleton } from "../Components/Skeletons";
import { getProductos } from "../Api/ProductosApi/route";
import { TablaProductos } from "../Components/Tablas";

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
