import React, { Suspense } from "react";
import { TablaCategorias } from "@/app/Components/Tablas";
import { getCategorias } from "@/app/Api/CategoriasApi/route";
import { TablaGenericaSkeleton } from "@/app/Components/Skeletons";

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
