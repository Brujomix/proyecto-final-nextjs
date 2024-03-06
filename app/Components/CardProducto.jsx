import React from "react";
import Image from "next/image";

export function CardProducto({ producto }) {
  return (
    <div className="w-[160px] flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2 bg-neutral-100">
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
    </div>
  );
}
