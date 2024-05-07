import React from "react";

export function BotonDinamico({
  children,
  className = "",
  disabled= false,
  ...args

}) {
  return (
    <button className={`Link hover:scale-110 hover:duration-300 hover:ease-in-out hover:bg-slate-200 ${className}`} disabled={disabled} {...args}>
      {children}
    </button>
  );
}
