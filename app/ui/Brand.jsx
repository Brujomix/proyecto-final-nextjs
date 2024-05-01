import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export function Brand() {
  return (
    <div className="flex justify-around items-center">
      <Link href={"/"}>
        <IoHomeOutline size={35} />
      </Link>
      <figcaption className="text-2xl font-semibold italic ">
        E-Commerce NextJS
      </figcaption>
    </div>
  );
}
