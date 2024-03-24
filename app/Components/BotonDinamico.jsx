import React from "react";

export function BotonDinamico({ children, className = "", ...args }) {
  return (
    <button
      className={`border p-1 text-sm italic tracking-wider bg-slate-100 rounded-md ${className}`}
      {...args}
    >
      {children}
    </button>
  );
}
