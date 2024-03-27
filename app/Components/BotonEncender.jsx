"use client";
import React from "react";
import { CiPower } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setEstado } from "@/Redux/Slices/EstadoAppSlice";
import { putEstado } from "../Api/EstadoAppApi/route";

export function BotonEncender() {
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  const socket = io("localhost:4000");
  const dispatch = useDispatch()
  return (
    <button
      onClick={async () => {
        await putEstado({enc_desc: !currentEstado}).then(res=>{
          if (res.status === 200) {
            dispatch(setEstado(!currentEstado))
          }
        })
      }}
      className="ml-5 border bg-slate-50 rounded-md"
    >
      <CiPower color="#000" size={25} />
    </button>
  );
}
