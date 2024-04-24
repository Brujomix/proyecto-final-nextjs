import React, { Suspense } from "react";
import { TablaCategorias, TablaGenericaSkeleton } from "@/app/Components";
import { getCategorias } from "@/app/Api/CategoriasApi/route";

async function categorias() {
  const listaCategorias = await getCategorias();
  return (
    <main className="flex justify-center">
      <Suspense fallback={<TablaGenericaSkeleton />}>
        <TablaCategorias categorias={listaCategorias} />
      </Suspense>
    </main>
  );
}

export default categorias;
