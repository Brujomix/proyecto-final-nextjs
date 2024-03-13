"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function NavBar() {
  const [isView, setIsView] = useState(false);
  const listaCategorias = [
    { cat_iden: 1, cat_desc: "Empanadas" },
    { cat_iden: 2, cat_desc: "Sandwicheria Fria" },
    { cat_iden: 3, cat_desc: "Pizzas" },
    { cat_iden: 5, cat_desc: "Promos" },
    { cat_iden: 6, cat_desc: "Hamburguesas" },
    { cat_iden: 7, cat_desc: "Menus" },
    { cat_iden: 8, cat_desc: "Sandwicheria Caliente" },
    { cat_iden: 9, cat_desc: "Tartas" },
  ];

  return (
    <div className="w-full p-2 flex flex-col gap-4">
      <button className="md:hidden" onClick={() => setIsView(!isView)}>
        {isView ? (
          <AiOutlineMenuFold size={35} />
        ) : (
          <AiOutlineMenuUnfold size={35} />
        )}
      </button>

      <div className={`${isView ? "block" : "hidden md:block"}`}>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {listaCategorias.map((e) => (
            <Link
              className="border text-lg text-semibold italic tracking-wider border-neutral-400 p-2 rounded-md bg-white"
              key={e.cat_iden}
              href={`/Productos/${e.cat_iden}`}
            >
              {e.cat_desc}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
