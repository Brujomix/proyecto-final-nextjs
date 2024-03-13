import React, { Suspense } from "react";
import { TablaCategorias } from "../Components/Tablas";
import { getCategorias } from "../Api/CategoriasApi/route";
import { TablaCategoriaSkeleton } from "../Components/Skeletons";

async function categorias() {
  const listaCategorias = await getCategorias();
  return (
    <div>
      <Suspense fallback={<TablaCategoriaSkeleton />}>
        <TablaCategorias categorias={listaCategorias} />
      </Suspense>
    </div>
  );
}

export default categorias;
