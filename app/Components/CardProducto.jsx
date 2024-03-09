"use client"
import React from "react";
import Image from "next/image";
import { BotonDinamico } from "./BotonDinamico";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
export function CardProducto({ producto }) {
  return (
    <div className="w-[160px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2 bg-white">
      <Image
        src={producto.pro_imagen}
        width={60}
        height={60}
        alt="Imagen Producto"
      />
      <figcaption className="font-semibold">{producto.pro_name}</figcaption>
      <p>{producto.pro_desc}</p>
      <span>{producto.cat_iden}</span>
      <span className="font-bold">$ {producto.pro_precio}</span>
      <div className=" border-t-2 w-full flex flex-row justify-around items-center p-1">
        <BotonDinamico onClick={()=>console.log(`agregar al carrito producto iden ${producto.pro_iden}`)}><TfiAngleUp size={20}/></BotonDinamico>
        <span className="text-sm italic">Carrito</span>
        <BotonDinamico onClick={()=>console.log(`quitar del carrito producto iden ${producto.pro_iden}`)}><TfiAngleDown size={20}/></BotonDinamico>
      </div>
    </div>
  );
}
