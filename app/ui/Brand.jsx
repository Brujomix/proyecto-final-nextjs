import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export function Brand() {
  return (
    <div className="grid grid-cols-1 gap-2" >
      <div className="flex justify-around items-center">
      <Link className="hover:scale-110 hover:duration-300 hover:ease-in-out" href={"/"}>
        <IoHomeOutline size={35} />
      </Link>
      <figcaption className="text-2xl font-semibold italic ">
        E-Commerce NextJS
      </figcaption>
      </div>
      <hr className="w-full h-2 bg-neutral-400 rounded-full"/>
    </div>
  );
}
