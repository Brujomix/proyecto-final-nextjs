"use client";
import React, { Suspense, useEffect, useState } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { getComandasFech } from "@/app/CRUD/gets";
import { socket } from "@/app/Utilidades/Util_Socket";

function Comandas() {

  const [listaComandas, setListaComandas] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const listaComandas = await getComandasFech();
      setListaComandas(listaComandas);
    };
    fetchdata();
    socket.on("nuevaComanda", (objComanda) => {
      fetchdata();
    });
  }, []);


  return (
    <main className="flex flex-row flex-wrap justify-center items-center gap-2 p-2">
      {listaComandas.map((e) => (
        <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
          <CardComanda comanda={e} />
        </Suspense>
      ))}
    </main>
  );
}

export default Comandas;
