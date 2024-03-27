"use client";
import React from "react";
import { CiPower } from "react-icons/ci";
import { cambiarEstadoApp } from "../Utilidades/Util_Socket";
import { useSelector } from "react-redux";

export function BotonEncender() {
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  return (
    <button
      onClick={() => cambiarEstadoApp({enc_desc: !currentEstado})}
      className="ml-5 border bg-slate-50 rounded-md"
    >
      <CiPower color="#000" size={25} />
    </button>
  );
}
