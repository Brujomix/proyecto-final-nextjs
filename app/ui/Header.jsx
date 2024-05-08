import React from "react";
import { Modal_User, RealTime } from "@/app/Components";
import { Brand, CarritoIcon, EstadoApp } from "@/app/ui";

export function Header() {
  return (
    <header className="z-500 grid grid-cols-3 gap-2 p-1 fixed top-0 w-full bg-neutral-200">
      <div className="col-span-3">
        <Brand />
      </div>
      <div className="flex justify-center items-center">
        <Modal_User />
      </div>
      <div className="flex justify-center items-center">
        <RealTime />
      </div>
      <div className="flex justify-center items-center">
        <CarritoIcon />
      </div>
      <div className="col-span-3">
        <EstadoApp />
      </div>
    </header>
  );
}
