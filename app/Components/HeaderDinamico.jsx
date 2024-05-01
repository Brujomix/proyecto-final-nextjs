import React from "react";

export function HeaderDinamico({ children, title }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-7 text-center ">
      <div>
        <span className="text-2xl font-semibold italic tracking-widest">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
