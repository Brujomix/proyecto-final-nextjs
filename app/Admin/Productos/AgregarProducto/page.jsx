import { getCategorias } from "@/app/CRUD/gets";
import { FormAddProducto } from "@/app/Components";
import React, { Suspense } from "react";

async function AgregarProducto() {
  const Categorias = await getCategorias();
  return (
    <main className="flex justify-center">
      <Suspense fallback={"Loading..."}>
        <FormAddProducto Categorias={Categorias} />
      </Suspense>
    </main>
  );
}

export default AgregarProducto;
