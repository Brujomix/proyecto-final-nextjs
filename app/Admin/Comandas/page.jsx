"use client";
import React, { Suspense, useState, useEffect } from "react";
import {
  CardComanda,
  CardComandaSkeleton,
  HeaderDinamico,
  ReferenciaComandas,
} from "@/app/Components";
import { format } from "date-fns";
import { getComandasFech } from "@/app/CRUD/gets";

function Comandas() {
  const [comandas, setComandas] = useState([]);
  const [nextRender, setNextRender] = useState(180);
  const now = format(new Date(), "dd-MM-yyyy");

  useEffect(() => {
    const interval = setInterval(() => {
      setNextRender((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(async () => {
    if (nextRender === 0) {
      const res = await getComandasFech(now);
      setComandas(res);
      setCounter(180);
    }
  }, [nextRender]);

  const minutes = Math.floor(nextRender / 60);
  const seconds = nextRender % 60;

  return (
    <main className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}>
        <div className="flex gap-2 justify-center">
          <span>Próxima Actualización en</span>
          <span>{`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}</span>
        </div>
      </HeaderDinamico>
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
