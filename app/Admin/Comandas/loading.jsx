"use client";
import React from "react";

function loading() {
  return (
    <div className="w-full grid grid-cols-1 opacity-50">
      <div className="ml-12 flex justify-center items-center">
        <span className="text-1xl">Loading Comandas...</span>
      </div>
    </div>
  );
}

export default loading;