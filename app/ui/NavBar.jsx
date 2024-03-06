"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavBarSkeleton from "../Components/Skeletons/NavBarSkeleton";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function NavBar() {
  const [isView, setIsView] = useState(false);
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setListaCategorias();
    };
    fetchData();
  }, []);

  return (
    <div className="p-2">
      <button className="md:hidden" onClick={() => setIsView(!isView)}>
        {isView ? (
          <AiOutlineMenuFold size={35} />
        ) : (
          <AiOutlineMenuUnfold size={35} />
        )}
      </button>

      <div
        className={`${
          isView ? "block" : "hidden"
        } p-4 flex flex-col flex-wrap justify-around items-center gap-3 md:flex md:flex-row md:w-fill`}
      >
        {[
          { cat_iden: 1, cat_desc: "Empanadas" },
          { cat_iden: 2, cat_desc: "Sandwicheria Fria" },
          { cat_iden: 3, cat_desc: "Pizzas" },
          { cat_iden: 5, cat_desc: "Promos" },
          { cat_iden: 6, cat_desc: "Hamburguesas" },
          { cat_iden: 7, cat_desc: "Menus" },
          { cat_iden: 8, cat_desc: "Sandwicheria Caliente" },
          { cat_iden: 9, cat_desc: "Tartas" }
        ].map((e) => (
          <Link
            className="md:w-auto w-full italic font-2xl border border-neutral-500 rounded-md p-2 bg-neutral-300"
            key={e.cat_iden}
            href={`/Productos/${e.cat_iden}`}
          >
            {e.cat_desc}
          </Link>
        ))}
      </div>
    </div>
  );
}
