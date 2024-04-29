import React from "react";

export function BotonDinamico({
  children,
  className = "",
  disabled= false,
  ...args

}) {
  return (
    <button className={`Link ${className}`} disabled={disabled} {...args}>
      {children}
    </button>
  );
}
