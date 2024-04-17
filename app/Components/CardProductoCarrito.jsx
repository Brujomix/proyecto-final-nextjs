import React from 'react'
import { useDispatch } from "react-redux";
import { removeItemCarrito } from "@/Redux/Slices/CarritoSlice";
import Image from "next/image";
import { BotonDinamico, RankingProductos } from "@/app/Components";
import { CiTrash } from "react-icons/ci";

export function CardProductoCarrito({productoCarrito}) {
    const dispatch = useDispatch()
  return (
    <div className="max-w-[310px] flex flex-row justify-around items-center border p-1 gap-2 border-neutral-500 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center gap-1 p-1">
        <Image
          src={productoCarrito.pro_imagen}
          width={80}
          height={80}
          alt="Imagen Producto"
        />
        <figcaption className="font-semibold text-center">
          {productoCarrito.pro_name}
        </figcaption>
        <RankingProductos pro_puntos={productoCarrito.pro_puntos} />
      </div>
      <div className="w-[120px] italic text-sm">
        <p>{productoCarrito.pro_desc}</p>
      </div>
      <span>{productoCarrito.cat_iden}</span>
      <div className="flex flex-col justify-center items-center p-1 gap-4">
        <span className="font-bold">$ {productoCarrito.pro_precio}</span>
        <span className="font-bold">X {productoCarrito.Cantidad}</span>
        <div className="flex flex-row justify-center items-center gap-1">
          <BotonDinamico
          className='bg-white border-neutral-500'
            onClick={() =>
              dispatch(removeItemCarrito(productoCarrito.pro_iden))
            }
          >
            <CiTrash color='red' size={20} />
          </BotonDinamico>
        </div>
      </div>
    </div>
  )
}
