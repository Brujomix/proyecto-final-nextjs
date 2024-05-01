"use client";
import React, { Suspense } from "react";
import {
  CardComanda,
  CardComandaSkeleton,
} from "@/app/Components";
import { useSelector } from "react-redux";

async function Comandas() {

  const listaComandas = useSelector((state) => state.Comandas.currentComandas);
 
  return (
    <main className="grid grid-cols-1 gap-4">
      {listaComandas.map((e) => (
        <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
          <CardComanda comanda={e} />
        </Suspense>
      ))}
    </main>
  );
}

export default Comandas;
