"use client"
import React from "react";
import { LineWave } from "react-loader-spinner";

function loading() {
  return (
    <div className="p-7 flex flex-col justify-center items-center opacity-50">
      <LineWave
        visible={true}
        height="250"
        width="200"
        color="#000"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}

export default loading;
