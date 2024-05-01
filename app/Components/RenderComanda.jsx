"use client"
import React, { Suspense, useEffect, useState } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { socket } from "../Utilidades/Util_Socket";

export function RenderComanda({comandas}) {

  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    socket.on("nuevaComanda", (objComanda)=>{
      setUpdate(!update)
    })
  },[])
  
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-2 p-2">
      {comandas.map((e) => (
        <Suspense key={e.com_iden} fallback={<CardComandaSkeleton />}>
          <CardComanda comanda={e} />
        </Suspense>
      ))}
    </div>
  );
}
