import React from "react";
import { useDispatch } from "react-redux";
import { removeItemCarrito } from "@/Redux/Slices/CarritoSlice";
import Image from "next/image";
import { BotonDinamico } from "@/app/Components";
import { CiTrash } from "react-icons/ci";

export function CardProductoCarrito({ productoCarrito }) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 border border-gray-300 bg-gray-200 rounded-md p-2">
      <div className="col-span-3 flex flex-row justify-center gap-7">
        <span className="font-semibold text-center">
          {productoCarrito.pro_name}
        </span>
        <span className="font-bold">$ {productoCarrito.pro_precio}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 p-1">
        <Image
          src={productoCarrito.pro_imagen}
          width={50}
          height={50}
          alt="Imagen Producto"
        />
      </div>
      <div className="flex flex-col text-center">
        <span className="text-sm italic">Cantidad</span>
        <span className="font-bold">X {productoCarrito.Cantidad}</span>
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <BotonDinamico
          className="bg-white border-neutral-500"
          onClick={() => dispatch(removeItemCarrito(productoCarrito.pro_iden))}
        >
          <CiTrash color="red" size={15} />
        </BotonDinamico>
      </div>
    </div>
  );
}
