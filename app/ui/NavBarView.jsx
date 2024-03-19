"use client";
import React, { Suspense, useState } from "react";
import { BotonDinamico } from "../Components";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function NavBarView({ NavBar }) {
  const [isView, setIsView] = useState(true);
  return (
    <div>
      <div>
        <BotonDinamico
          className="w-fit bg-white md:hidden"
          onClick={() => setIsView(!isView)}
        >
          {isView ? (
            <AiOutlineMenuFold size={25} />
          ) : (
            <AiOutlineMenuUnfold size={25} />
          )}
        </BotonDinamico>
      </div>
      <div className={`${isView? "block md:block": "hidden md:block"}`}>
        <Suspense fallback={<div>"Esperando a Navbar...."</div>}>{NavBar}</Suspense>
      </div>
    </div>
  );
}
