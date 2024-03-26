"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function EstadoApp() {
  const socket = io();

  const [messageEstado, setMessageEstado] = useState("");

  useEffect(() => {
    const cambiaEstado = () => {
      socket.on("message", (message)=>{setMessageEstado(message)});
    };
    cambiaEstado();
  }, []);

  console.log("El mensaje:", messageEstado);
  
  return (
    <div className="text-start italic font-sm fixed top-0 bg-red-500 w-full h-7 p-1">
      Comercio Fuera de Línea
    </div>
  );
}
