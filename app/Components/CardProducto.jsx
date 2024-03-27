"use client";
import React from "react";
import Image from "next/image";
import { BotonDinamico } from ".";
import { RankingProductos } from ".";
import { useDispatch, useSelector } from "react-redux";
import { addItemCarrito, removeItemCarrito } from "@/Redux/Slices/CarritoSlice";
import { BsCartDash, BsCartPlus } from "react-icons/bs";

export function CardProducto({ producto }) {
  const dispatch = useDispatch();
  const currentEstado = useSelector((state) => state.EstadoApp.Estado);
  return (
    <div className="max-w-[310px] flex flex-row justify-around items-center border p-1 gap-2 border-neutral-500 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center gap-1 p-1">
        <Image
          src={producto.pro_imagen}
          width={80}
          height={80}
          alt="Imagen Producto"
        />
        <figcaption className="font-semibold text-center">
          {producto.pro_name}
        </figcaption>
        <RankingProductos pro_puntos={producto.pro_puntos} />
      </div>
      <div className="w-[120px] italic text-sm">
        <p>{producto.pro_desc}</p>
      </div>
      <span>{producto.cat_iden}</span>
      <div className="flex flex-col justify-center items-center p-1 gap-4">
        <span className="font-bold">$ {producto.pro_precio}</span>
        <div className="flex flex-row justify-center items-center gap-1">
          <BotonDinamico onClick={() => dispatch(addItemCarrito(producto))}>
            <BsCartPlus size={20} />
          </BotonDinamico>
          <BotonDinamico
            onClick={() => dispatch(removeItemCarrito(producto.pro_iden))}
          >
            <BsCartDash size={20} />
          </BotonDinamico>
        </div>
      </div>
    </div>
  );
}
