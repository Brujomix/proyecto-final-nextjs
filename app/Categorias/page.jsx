import React, { Suspense } from "react";
import { TablaCategorias } from "../Components/Tablas";
import { getCategorias } from "../Api/CategoriasApi/route";

async function categorias() {
  const listaCategorias = await getCategorias();
  return (
    <div>
      {listaCategorias.map(e=>(
        <Suspense key={e.cat_iden} fallback={"una categoria"}>
          <TablaCategorias key={e.cat_iden} categoria={e}/>
        </Suspense>
      ))}
    </div>
  );
}

export default categorias;
