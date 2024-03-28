import React from "react";
import Image from "next/image";
import { RankingProductos } from "@/app/Components";

export function CardProducto({ producto, BtnsCarrito }) {

  return (
    <div className="max-w-[310px] flex flex-row justify-around items-center border p-1 gap-2 border-neutral-500 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center gap-1 p-1">
        <Image
          src={producto.pro_imagen}
          width={70}
          height={70}
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
        {BtnsCarrito}
      </div>
    </div>
  );
}
