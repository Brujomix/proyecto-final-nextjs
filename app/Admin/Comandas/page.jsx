"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  CardComanda,
  CardComandaSkeleton,
  HeaderDinamico,
  ReferenciaComandas,
} from "@/app/Components";
import { getComandasFech } from "@/app/CRUD/gets";

function Comandas() {
  const [comandas, setComandas] = useState([]);

  useEffect(() => {
    const interval = setInterval(async() => {
      const res = await getComandasFech();
      setComandas(res);
    }, 10000);
    return () => clearInterval(interval);
  }, [comandas]);

  return (
    <main className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}></HeaderDinamico>
      <ReferenciaComandas />
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
        {comandas.map((e) => (
          <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
            <CardComanda comanda={e} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}

export default Comandas;
