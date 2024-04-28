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
  const now = format(new Date(), "dd-MM-yyyy");

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getComandasFech(now)
      setComandas(res)
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(()=>{
    const fetchdata = async ()=>{
      const res = await getComandasFech(now)
      setComandas(res)
    }
    fetchdata()
  },[])

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
