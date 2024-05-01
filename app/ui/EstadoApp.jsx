"use client";
import React from "react";
import { useSelector } from "react-redux";
import { BotonEncender } from "@/app/Components";

export function EstadoApp() {

  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  
  return (
    <div
      className={`${
        currentEstado ? "bg-green-400" : "bg-red-400"
      } flex justify-around w-full h-9 p-1`}
    >
      <BotonEncender currentUser={currentUser}/>
      <span className="mr-5 italic font-sm">
        {currentEstado ? "En Línea" : "Fuera de Línea"}
      </span>
    </div>
  );
}
