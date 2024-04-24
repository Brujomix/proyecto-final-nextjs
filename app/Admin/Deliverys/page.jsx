import React, { Suspense } from "react";
import { TablaDeliverys, TablaGenericaSkeleton } from "@/app/Components";
import { getDeliverys } from "@/app/Api/DeliverysApi/route";

async function Deliverys() {
  const listaDeliverys = await getDeliverys();
  return (
    <main className="flex justify-center">
      <Suspense fallback={<TablaGenericaSkeleton />}>
        <TablaDeliverys deliverys={listaDeliverys} />
      </Suspense>
    </main>
  );
}

export default Deliverys;
