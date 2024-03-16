import React, { Suspense } from "react";
import { TablaCategorias } from "../Components/Tablas";
import { getCategorias } from "../Api/CategoriasApi/route";
import { TablaGenericaSkeleton } from "../Components/Skeletons";

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
