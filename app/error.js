"use client";
import React, {useEffect} from "react";
import { BotonDinamico } from "@/app/Components";
import { BiError } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

function Error({ error, reset }) {

  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <BiError className="opacity-50" size={200} color="#F00" />
      <figcaption className="text-1xl font-semibold italic">
        Algo salio mal, Intenta Recargar...
      </figcaption>
      <BotonDinamico onClick={() => reset()}>
        <div className="flex flex-row justify-center items-center gap-5">
          <TfiReload size={30} />
          <figcaption>Reload...</figcaption>
        </div>
      </BotonDinamico>
    </div>
  );
}

export default Error;
