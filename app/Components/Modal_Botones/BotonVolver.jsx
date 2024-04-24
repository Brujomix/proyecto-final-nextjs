"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BotonDinamico } from "..";

export function BotonVolver() {
  const router = useRouter();
  return (
    <BotonDinamico onClick={() => router.back()}>
      <IoMdArrowRoundBack size={25} color="blue" />
    </BotonDinamico>
  );
}
