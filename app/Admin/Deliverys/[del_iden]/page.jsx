import { getDelivery } from "@/app/CRUD/gets";
import { FormEditDelivery } from "@/app/Components";
import React, { Suspense } from "react";

async function EditarDelivery({ params }) {
  const currentDelivery = await getDelivery(params.del_iden);
  return (
    <main className="flex justify-center">
      <Suspense fallback={"Getting Data..."}>
        <FormEditDelivery objDelivery={currentDelivery} />
      </Suspense>
    </main>
  );
}

export default EditarDelivery;
