"use client";
import React, {Suspense} from "react";
import {
  CardComanda,
  CardComandaSkeleton,
  HeaderDinamico,
  ReferenciaComandas,
} from "@/app/Components";
import { useSelector } from "react-redux";

function Comandas() {

  const comandas = useSelector(state => state.Comandas.itemsComandas)

  return (
    <main className="grid grid-cols-1 gap-4">
      <HeaderDinamico title={"Comandas"}>
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
