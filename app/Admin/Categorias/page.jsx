import React, { Suspense } from "react";
import { TablaCategorias, TablaGenericaSkeleton } from "@/app/Components";
import { getCategorias } from "@/app/Api/CategoriasApi/route";

async function categorias() {
  const listaCategorias = await getCategorias();
  return (
    <div className="flex flex-col justify-center items-center">
      <Suspense fallback={<TablaGenericaSkeleton />}>
        <TablaCategorias categorias={listaCategorias} />
      </Suspense>
    </div>
  );
}

export default categorias;
