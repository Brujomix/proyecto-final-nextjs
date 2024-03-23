"use client";
import React, { Suspense, useState } from "react";
import { BotonDinamico } from "@/app/Components";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function NavBarView({ NavBar }) {
  const [isView, setIsView] = useState(true);
  return (
    <div>
      <div className="mx-3 my-1">
        <BotonDinamico
          className="w-fit bg-white md:hidden"
          onClick={() => setIsView(!isView)}
        >
          {isView ? (
            <AiOutlineMenuFold size={30} />
          ) : (
            <AiOutlineMenuUnfold size={30} />
          )}
        </BotonDinamico>
      </div>
      <div className={`${isView? "block md:block": "hidden md:block"}`}>
        <Suspense fallback={<div>"Esperando a Navbar...."</div>}>{NavBar}</Suspense>
      </div>
    </div>
  );
}
