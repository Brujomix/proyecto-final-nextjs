"use client";
import React from "react";
import { LineWave } from "react-loader-spinner";

function loading() {
  return (
    <div className="w-full grid grid-cols-1 opacity-50">
      <div className="ml-12 flex justify-center items-center">
        <LineWave
          visible={true}
          color="#000"
          height={200}
          width={200}
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor="#111"
          lastLineColor=""
        />
      </div>
    </div>
  );
}

export default loading;
