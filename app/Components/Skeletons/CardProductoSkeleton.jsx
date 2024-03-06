import React from 'react'
import { CiImageOn } from "react-icons/ci";

export function CardProductoSkeleton() {
  return (
    <div className="w-[160px] opacity-50 flex flex-col justify-center items-center border gap-3 border-neutral-500 rounded-md p-2 bg-white">
      <CiImageOn size={120}/>
      <figcaption className="font-semibold">Nombre</figcaption>
      <p>Descripcion</p>
      <span>Categoria</span>
      <span className="font-bold">$ xxxx</span>
    </div>
  );
}
