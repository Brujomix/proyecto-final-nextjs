"use client";
import ErrorDinamico from "@/app/Components/ErrorDinamico";
import React from "react";

function error({ error, reset }) {
  console.log(error);
  return (
    <ErrorDinamico/>
  );
}

export default error;
