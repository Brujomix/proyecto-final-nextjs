"use client"
import React from 'react'
import { BotonDinamico } from '.';
import { useDispatch } from "react-redux";
import { addItemCarrito, removeItemCarrito } from "@/Redux/Slices/CarritoSlice";
import { BsCartDash, BsCartPlus } from "react-icons/bs";

export default function BotonesCarrito({currentProducto}) {
      const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <BotonDinamico onClick={() => dispatch(addItemCarrito(currentProducto))}>
        <BsCartPlus size={20} />
      </BotonDinamico>
      <BotonDinamico
        onClick={() => dispatch(removeItemCarrito(currentProducto.pro_iden))}
      >
        <BsCartDash size={20} />
      </BotonDinamico>
    </div>
  );
}
