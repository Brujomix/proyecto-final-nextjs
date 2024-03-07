"use client";
import React from "react";
import ErrorDinamico from "@/app/Components/ErrorDinamico";

function error({ error, reset }) {
  return (
    <ErrorDinamico/>
  );
}

export default error;
