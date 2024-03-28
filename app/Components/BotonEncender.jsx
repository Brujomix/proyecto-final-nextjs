"use client";
import React from "react";
import { CiPower } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setEstado } from "@/Redux/Slices/EstadoAppSlice";
import { putEstado } from "../Api/EstadoAppApi/route";
import { cambiaValorEstado, verificaUserRol } from "../Utilidades/Util_Estado";
import { socket } from "@/app/Utilidades/Util_Socket";

export function BotonEncender() {
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  const dispatch = useDispatch();
  return (
    <button
     className={`${verificaUserRol(currentUser)} ml-5 border bg-slate-50 rounded-md`}
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
    >
      <CiPower color="#000" size={25} />
    </button>
  );
}
