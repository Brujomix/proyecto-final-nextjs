"use client";
import React, { useEffect, useState } from "react";
import { BotonDinamico } from "@/app/Components";
import Image from "next/image";

export function BannerCookie() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } z-50 grid grid-cols-2 gap-4 fixed bottom-2 bg-slate-400 w-full rounded-md p-7`}
    >
      <div>
        <Image src="/cookies.png" width={80} height={80} alt="Imagen Cookie" />
        <span className="text-center tex-xl italic tracking-wide">
          Este sitio utiliza cookies para mejorar la experiencia del usuario
        </span>
      </div>
      <div className="grid grid-cols-1 md:gid-cols-2 gap-4">
        <BotonDinamico
          onClick={() => {
            document.cookie =
              "cookies=aceptado; path=/; expires=" +
              new Date(new Date().getTime() + 86400000).toUTCString();
            setShow(false);
          }}
        >
          Aceptar
        </BotonDinamico>
        <BotonDinamico onClick={() => setShow(false)}>Cancelar</BotonDinamico>
      </div>
    </div>
  );
}
