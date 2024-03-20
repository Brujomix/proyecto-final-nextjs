import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export function Brand() {
  return (
    <div className="flex justify-between items-center p-5 bg-neutral-50">
      <Link href={"/"}>
        <IoHomeOutline size={35} />
      </Link>
      <figcaption className="text-2xl font-semibold italic ">
        E-Commerce NextJS
      </figcaption>
    </div>
  );
}
