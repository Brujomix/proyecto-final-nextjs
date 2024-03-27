import React from "react";

export function BotonDinamico({
  children,
  className = "",
  ...args
}) {
  return (
    <button className={`Link ${className}`} {...args}>
      {children}
    </button>
  );
}
