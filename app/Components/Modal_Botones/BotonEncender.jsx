"use client"
import React, {useEffect} from "react";
import { CiPower } from "react-icons/ci";
import { Toast_Dinamico } from "../Toast_Dinamico";
import { putEstado } from "@/app/CRUD/update";
import { socket } from "@/app/Utilidades/Util_Socket";
import { useDispatch, useSelector } from "react-redux";
import { setEstado } from "@/Redux/Slices/EstadoAppSlice";
import { cambiaValorEstado, verificaUserRol } from "@/app/Utilidades/Util_Estado";
import { getEstadoApp } from "@/app/CRUD/gets";

export function BotonEncender({currentUser}) {

  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEstadoApp());
    socket.on("nuevoEstado", (ObjEsatdo) => {
      dispatch(setEstado(ObjEsatdo.estado));
    });
  }, [currentEstado, dispatch]);


  return (
    <button className={`${verificaUserRol(currentUser)}`} onClick={async ()=>{
      const res = await putEstado({ enc_desc: cambiaValorEstado(!currentEstado) })
      if (res.ok) {
        dispatch(setEstado(!currentEstado));
        socket.emit("cambiaEstado", { estado: !currentEstado });
        socket.off("cambiaEstado");
        Toast_Dinamico("success", "Estado Actualizado");
      } else {
        Toast_Dinamico("error", "Error del Servidor");
      }
    }}>
      <CiPower color="#000" size={25} />
    </button>
  );
}
