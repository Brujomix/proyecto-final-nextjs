"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEstadoApp, putEstado } from "@/app/Api/EstadoAppApi/route";
import { BotonEncender } from "../Components";
import { socket } from "@/app/Utilidades/Util_Socket";
import { setEstado } from "@/Redux/Slices/EstadoAppSlice";
import { cambiaValorEstado, verificaUserRol } from "../Utilidades/Util_Estado";

export function EstadoApp() {
  const dispatch = useDispatch();
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  useEffect(() => {
    dispatch(getEstadoApp());
    socket.on("nuevoEstado", (ObjEsatdo) => {
      dispatch(setEstado(ObjEsatdo.estado));
    });
  }, [currentEstado]);

  return (
    <div
      className={`${
        currentEstado ? "bg-green-400" : "bg-red-400"
      } flex flex-row justify-between items-center fixed top-0 w-full h-9 p-1`}
    >
      <BotonEncender
        className={`${verificaUserRol(currentUser)}`}
        currentUser={currentUser}
        onClick={async () => {
          await putEstado({ enc_desc: cambiaValorEstado(!currentEstado) }).then(
            (res) => {
              if (res.status === 200) {
                dispatch(setEstado(!currentEstado));
                socket.emit("cambiaEstado", { estado: !currentEstado });
                socket.off("cambiaEstado");
              }
            }
          );
        }}
      />
      <span className="mr-5 italic font-sm">
        {currentEstado ? "Comercio En Línea" : "Comercio Fuera de Línea"}
      </span>
    </div>
  );
}
