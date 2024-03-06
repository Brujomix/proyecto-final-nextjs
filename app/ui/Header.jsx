import React from "react";
import { Brand } from ".";
import { User_Carrito } from "../Components/User_Carrito";

export function Header() {
  return (
    <header>
      <Brand />
      <User_Carrito/>
    </header>
  );
}
