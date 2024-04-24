import React from "react";

export function HeaderDinamico({ children, title }) {
  return (
    <div className="grid grid-cols-1 gap-4 text-center">
      <div>
        <span className="text-2xl font-semibold italic tracking-widest">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
