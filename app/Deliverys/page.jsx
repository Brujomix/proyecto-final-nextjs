import React, { Suspense } from "react";
import { TablaDeliverys } from "../Components/Tablas";
import { TablaGenericaSkeleton } from "../Components/Skeletons";
import { getDeliverys } from "../Api/DeliverysApi/route";

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
