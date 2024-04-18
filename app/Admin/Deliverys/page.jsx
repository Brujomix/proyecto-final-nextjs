import React, { Suspense } from "react";
import { TablaDeliverys, TablaGenericaSkeleton } from "@/app/Components/Tablas";
import { getDeliverys } from "@/app/Api/DeliverysApi/route";

async function Deliverys() {
  const listaDeliverys = await getDeliverys();
  return (
    <div className="flex flex-col justify-center items-center">
      <Suspense fallback={<TablaGenericaSkeleton />}>
        <TablaDeliverys deliverys={listaDeliverys} />
      </Suspense>
    </div>
  );
}

export default Deliverys;
