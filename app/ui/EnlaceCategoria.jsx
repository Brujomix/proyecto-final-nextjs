"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EnlaceCategoria({ categoria }) {
  const path = usePathname();
  return (
    <div className="flex justify-center items-center">
      <Link
        className={`text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md ${
          path === `/Productos/${categoria.cat_iden}`
            ? "bg-neutral-200"
            : ""
        }`}
        key={categoria.cat_iden}
        href={`/Productos/${categoria.cat_iden}`}
      >
        {categoria.cat_desc}
      </Link>
    </div>
  );
}
