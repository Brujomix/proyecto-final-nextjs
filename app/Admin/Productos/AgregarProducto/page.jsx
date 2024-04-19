import { getCategorias } from "@/app/Api/CategoriasApi/route";
import { FormAddProducto } from "@/app/Components";
import React, { Suspense } from "react";

async function AgregarProducto() {
  const Categorias = await getCategorias();
  return (
    <main>
      <Suspense fallback={"Loading..."}>
        <FormAddProducto Categorias={Categorias} />
      </Suspense>
    </main>
  );
}

export default AgregarProducto;
