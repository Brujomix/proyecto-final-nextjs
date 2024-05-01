"use client";
import React, { useEffect, useState } from "react";
import { socket } from "../Utilidades/Util_Socket";

export async function CardComanda({ comandas }) {
  const [listacomandas, setListaComandas] = useState(comandas);

  useEffect(() => {
    socket.on("nuevaComanda", (objComanda) => {
      setListaComandas((prevListaObjetos) => [...prevListaObjetos, objComanda]);
    });
  }, [listacomandas]);

  return (
    <div>
      {listacomandas.map((e) => (
        <CardComanda comanda={e} />
      ))}
    </div>
  );
}
