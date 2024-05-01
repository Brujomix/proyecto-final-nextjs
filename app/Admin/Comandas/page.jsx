import React, { Suspense } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { getComandasFech } from "@/app/CRUD/gets";
import { format } from "date-fns";

async function Comandas() {
  const now = format(new Date(), "dd-MM-yyyy");
  const currentComandas = await getComandasFech(now);

  return (
    <main className="grid grid-cols-1 gap-4">
      <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
        <CardComanda comandas={currentComandas} />
      </Suspense>
    </main>
  );
}

export default Comandas;
