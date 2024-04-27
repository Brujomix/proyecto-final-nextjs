"use client";
import React, { Suspense, useState, useEffect } from "react";
import {
  CardComanda,
  CardComandaSkeleton,
  HeaderDinamico,
  ReferenciaComandas,
} from "@/app/Components";
import { format } from "date-fns";
import { getComandasFech, getProductos } from "@/app/CRUD/gets";

function Comandas() {
  const [comandas, setComandas] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const now = format(new Date(), "dd-MM-yyyy");
      const res = await getComandasFech(now)
      setComandas(res)
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}></HeaderDinamico>
      <ReferenciaComandas />
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
        {comandas.map((e) => (
          <Suspense fallback={<CardComandaSkeleton />}>
            <CardComanda comanda={e} />
          </Suspense>
        ))}
      </div>
    </main>
  );
}

export default Comandas;
