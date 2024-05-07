"use client";
import React, { useEffect, useState } from "react";
import {
  FormCarrito,
  ItemsCarrito,
  SinItemsCarrito,
} from "@/app/Components";
import { useSelector } from "react-redux";

export default function CarritoPage() {
  const carritoRedux = useSelector(state => state.Carrito.itemsCarrito)
  const [itemsCarrito, setItemsCarrito] = useState([])

  useEffect(()=>{
    const carritoLS = localStorage.getItem("carritoStorage")
    console.log(carritoLS);
    if (carritoLS === null) {
      setItemsCarrito(carritoRedux)
    }
  },[])

  return (
    <div >
      {itemsCarrito.length === 0 ? (
        <SinItemsCarrito />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <ItemsCarrito />
          <FormCarrito />
        </div>
      )}
    </div>
  );
}
