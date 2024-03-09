import React from "react";
import { Carrito, Usuario } from "../ui";

export function User_Carrito() {
  return (
    <>
      <div className="flex flex-row justify-around items-center p-2 bg-neutral-300">
        <Usuario />
        <Carrito />
      </div>
      <hr />
    </>
  );
}
