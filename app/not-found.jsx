"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BotonDinamico } from "./Components";
import { TbError404 } from "react-icons/tb";

function NotFound() {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="text-center mb-7">
        <TbError404 className="opacity-50" size={220} />
        <figcaption className="italic tracking-widest">
          Pagina No Encontrada
        </figcaption>
      </div>
      <div>
        <BotonDinamico onClick={() => router.back()}>Regrear</BotonDinamico>
      </div>
    </main>
  );
}

export default NotFound;
