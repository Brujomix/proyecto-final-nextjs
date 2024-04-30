"use client";
import React from "react";
import { BotonDinamico } from "@/app/Components";
import { BiError } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

function globalError({ error, reset }) {
  return (
    <>
      <html>
        <body>
          <div className="flex flex-col gap-4 justify-center items-center">
            <BiError className="opacity-50" size={200} color="#F00" />
            <figcaption className="text-1xl font-semibold italic">
              No Pudimos Cargar la Página.
            </figcaption>
            <BotonDinamico onClick={() => reset()}>
              <div className="flex flex-row justify-center items-center gap-5">
                <TfiReload size={30} color="grey" />
                <figcaption>Reload...</figcaption>
              </div>
            </BotonDinamico>
          </div>
        </body>
      </html>
    </>
  );
}

export default globalError;
