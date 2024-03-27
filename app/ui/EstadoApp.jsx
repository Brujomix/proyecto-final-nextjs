"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEstadoApp } from "@/app/Api/EstadoAppApi/route";

export function EstadoApp() {
  const dispatch = useDispatch();
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);

  useEffect(() => {
    dispatch(getEstadoApp());
  }, []);

  return (
    <div
      className={`${
        currentEstado === "true" ? "bg-green-400" : "bg-red-400"
      } flex flex-row justify-between items-center fixed top-0 w-full h-9 p-1`}
    >
      <span className="mr-5 italic font-sm">
        {currentEstado === "true"
          ? "Comercio En Línea"
          : "Comercio Fuera de Línea"}
      </span>
    </div>
  );
}
