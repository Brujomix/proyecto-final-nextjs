"use client";
import React from "react";
import { BotonDinamico } from "..";
import { useDispatch, useSelector } from "react-redux";
import { addItemCarrito, removeItemCarrito } from "@/Redux/Slices/CarritoSlice";
import { BsCartDash, BsCartPlus } from "react-icons/bs";

export function BotonesCarrito({ currentProducto }) {
  const dispatch = useDispatch();
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  return (
    <div className={`flex flex-row justify-around`}>
      <BotonDinamico
        disabled={!currentEstado ? true : false}
        className={currentEstado ? "cursor-pointer" : "cursor-not-allowed"}
        onClick={() => dispatch(addItemCarrito(currentProducto))}
      >
        <BsCartPlus size={20} />
      </BotonDinamico>
      <BotonDinamico
        disabled={!currentEstado ? true : false}
        className={currentEstado ? "cursor-pointer" : "cursor-not-allowed"}
        onClick={() => dispatch(removeItemCarrito(currentProducto.pro_iden))}
      >
        <BsCartDash size={20} />
      </BotonDinamico>
    </div>
  );
}
