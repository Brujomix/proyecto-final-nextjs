import React from "react";
import { CiPower } from "react-icons/ci";

export function BotonEncender({currentUser, className="", ...args}) {
  return (
    <button {...args} className={`${className} ml-5 border bg-slate-50 rounded-md`}>
      <CiPower color="#000" size={25} />
    </button>
  );
}
