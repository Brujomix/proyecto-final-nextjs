"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEstado } from "@/Redux/Slices/EstadoAppSlice";
import { getEstado } from "../Api/EstadoAppApi/route";

export function EstadoApp() {

  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        currentEstado ? "bg-green-400" : "bg-red-400"
      } flex flex-row justify-between items-center fixed top-0 w-full h-9 p-1`}
    >
      <span className="mr-5 italic font-sm">Comercio Fuera de Línea</span>
    </div>
  );
}
