import React, { Suspense } from "react";
import { getProductos } from "@/app/Api/ProductosApi/route";
import { TablaProductos, TablaGenericaSkeleton } from "@/app/Components";

async function ProductosAdmin() {
  const listaProductos = await getProductos();
  return (
    <main className="flex justify-center">
      <Suspense fallback={<TablaGenericaSkeleton />}>
        <TablaProductos Productos={listaProductos} />
      </Suspense>
    </main>
  );
}

export default ProductosAdmin;
