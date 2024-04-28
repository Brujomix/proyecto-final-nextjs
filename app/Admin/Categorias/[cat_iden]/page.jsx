import { getCategoria } from "@/app/CRUD/gets";
import { FormEditCategoria } from "@/app/Components";
import React, { Suspense } from "react";

async function EditarCategoria({ params }) {
  const currentCategoria = await getCategoria(params.cat_iden);
  return (
    <main className="flex justify-center">
      <Suspense fallback={"Getting Data..."}>
        <FormEditCategoria objCategoria={currentCategoria} />
      </Suspense>
    </main>
  );
}

export default EditarCategoria;
