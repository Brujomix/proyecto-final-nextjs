"use client";
import React, { useEffect, useState } from "react";
import { socket } from "../Utilidades/Util_Socket";
import { CardComanda } from ".";

export async function RenderComanda({ comandas }) {
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
