"use client"
import React from "react";
import Link from "next/link";

export default function EnlaceCategoria({ categoria }) {
  return (
    <div className="flex justify-center items-center">
      <Link
        className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white"
        key={categoria.cat_iden}
        href={`/Productos/${categoria.cat_iden}`}
      >
        {categoria.cat_desc}
      </Link>
    </div>
  );
}
