import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <div className="flex justify-between items-center p-4 bg-neutral-50">
      <Link href={"/"}>
        <Image
          src={"/LogoWW.png"}
          width={90}
          height={90}
          alt="Brand Image"
          priority
        />
      </Link>
      <figcaption className="text-2xl font-semibold italic">
        E-Commerce NextJS
      </figcaption>
    </div>
  );
}
