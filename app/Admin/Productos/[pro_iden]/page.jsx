import { getCategorias } from "@/app/Api/CategoriasApi/route";
import { getProductobyId } from "@/app/Api/ProductosApi/route";
import { FormEditProducto } from "@/app/Components";
import React, { Suspense } from "react";

async function Editar_Producto({ params }) {
  const currentProducto = await getProductobyId(params.pro_iden);
  const Categorias = await getCategorias();
  return (
    <main className="flex justify-center">
    <Suspense fallback={"Getting Data..."}>
      <FormEditProducto ObjProducto={currentProducto} Categorias={Categorias} />
    </Suspense>
    </main>
  );
}

export default Editar_Producto;
