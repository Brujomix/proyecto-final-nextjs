"use client"
import React from "react";
import { CiPower } from "react-icons/ci";

export function BotonEncender() {
  return (
    <button
      onClick={()=>console.log("Cambiando estado de app")}
      className="ml-5 border bg-slate-50 rounded-md"
    >
      <CiPower color="#000" size={25} />
    </button>
  );
}
