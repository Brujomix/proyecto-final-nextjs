"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BotonDinamico } from "./Components";

function NotFound() {
    const router = useRouter()
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <span className="text-2xl italic tracking-widest">Pagina No Encontrada</span>
      <BotonDinamico onClick={()=> router.back()}>Regrear</BotonDinamico>
    </main>
  );
}

export default NotFound;
