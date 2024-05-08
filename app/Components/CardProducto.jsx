import React from "react";
import Image from "next/image";
import { BotonesCarrito, RankingProductos } from "@/app/Components";

export function CardProducto({ producto }) {
  return (
    <div className=" bg-neutral-100 w-[320px] grid grid-cols-2 gap-2 p-2 border border-neutral-700 rounded-md">
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src={producto.pro_imagen}
          width={80}
          height={80}
          alt="Imagen Producto"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <figcaption className="text-sm underline italic">
            Producto Recomendado:
          </figcaption>
          <RankingProductos pro_puntos={producto.pro_puntos} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <span className="font-semibold text-center text-2xl">
          {producto.pro_name}
        </span>
        <p className="text-sm">{producto.pro_desc}</p>
      </div>
      <div className="col-span-2 flex flex-row justify-around items-center">
        <div className="space-y-1">
          <span className="text-sm italic">Agregar Al Carrito</span>
          <BotonesCarrito currentProducto={producto} />
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="text-gray-500 text-2xl">$</span>
          <span className="font-bold text-red-700 text-2xl">
            {producto.pro_precio}
          </span>
        </div>
      </div>
    </div>
  );
}
