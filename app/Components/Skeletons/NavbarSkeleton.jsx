import React from "react";

export function NavbarSkeleton() {
  return (
    <div className="flex justify-center items-center opacity-50">
      <div className="hide-scrollbar-buttons overflow-x-auto mb-4 flex flex-row gap-3 ml-5 mr-5 p-2">
        <span className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white">
          Caterogia
        </span>
        <span className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white">
          Caterogia
        </span>
        <span className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white">
          Caterogia
        </span>
        <span className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white">
          Caterogia
        </span>
        <span className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white">
          Caterogia
        </span>
      </div>
    </div>
  );
}
