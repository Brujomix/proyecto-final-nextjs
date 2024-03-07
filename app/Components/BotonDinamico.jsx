import React from "react";

export function BotonDinamico({ children, className = "", ...args }) {
  return (
    <button
      className={`border p-2 font-semibold italic tracking-wider bg-slate-300 rounded-md ${className}`}
      {...args}
    >
      {children}
    </button>
  );
}
