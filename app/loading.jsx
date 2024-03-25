"use client";
import React from "react";
import { LineWave } from "react-loader-spinner";

function loading() {
  return (
    <div className="flex justify-center items-center opacity-50">
      <LineWave
        visible={true}
        height="250"
        width="200"
        color="#000"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor="#111"
        lastLineColor=""
      />
    </div>
  );
}

export default loading;
