"use client";
import React from "react";
import ErrorDinamico from "@/app/Components/ErrorDinamico";

function error({ error, reset }) {
  console.log(error);
  return <ErrorDinamico onClick={() => reset()} />;
}

export default error;
