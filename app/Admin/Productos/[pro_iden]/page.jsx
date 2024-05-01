import { getCategorias, getProducto } from "@/app/CRUD/gets";
import { FormEditProducto } from "@/app/Components";
import React, { Suspense } from "react";

async function Editar_Producto({ params }) {
  const currentProducto = await getProducto(params.pro_iden);
  const Categorias = await getCategorias();
  return (
    <main className="flex justify-center">
      <Suspense fallback={"Getting Data..."}>
        <FormEditProducto
          ObjProducto={currentProducto}
          Categorias={Categorias}
        />
      </Suspense>
    </main>
  );
}

export default Editar_Producto;
