import React, { Suspense } from "react";
import { TablaProductos, TablaGenericaSkeleton } from "@/app/Components";
import { getProductos } from "@/app/CRUD/gets";

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
