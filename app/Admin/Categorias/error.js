"use client";
import React, { useEffect } from "react";
import { BotonDinamico } from "@/app/Components";
import { BiError } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

function error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="border-2 p-4 rounded-md flex flex-col gap-4 justify-center items-center bg-neutral-200 shadow-nuetral-950 shadow-2xl">
      <BiError size={240} color="#aaa" />
      <figcaption className="text-2xl font-semibold italic">
        Algo salio mal, Intenta Recargar...
      </figcaption>
      <span>Si el problema persiste, Contactenos.</span>
      <BotonDinamico onClick={() => reset()}>
        <div className="flex flex-row justify-center items-center gap-5">
          <TfiReload size={30} />
          <figcaption>Reload...</figcaption>
        </div>
      </BotonDinamico>
    </div>
  );
}

export default error;
