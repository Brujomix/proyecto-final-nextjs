import React from "react";
import { CarritoIcon, Usuario } from "../ui";

export function User_Carrito() {
  return (
    <div className="flex flex-row justify-start items-center bg-neutral-300 fixed top-7 w-full p-2">
      <Usuario />
      <CarritoIcon />
    </div>
  );
}
