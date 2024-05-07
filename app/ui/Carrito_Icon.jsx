"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { SumaItemsCarrito } from "@/app/Utilidades/Utils_Carrito";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export function CarritoIcon() {
  const itemsCarrito = useSelector((state) => state.Carrito.itemsCarrito);
  const [animaCarrito, setAnimaCarrito] = useState(false);

  useEffect(() => {
    setAnimaCarrito(true);
    const timer = setTimeout(() => {
      setAnimaCarrito(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [itemsCarrito]);

  return (
    <motion.div
      animate={{
        scale: animaCarrito ? 1.2 : 1,
        opacity: animaCarrito ? 0.3 : 1
      }}
      transition={{ duration: 0.3 }}
    >
      <Link defaultChecked={false} href={"/Carrito"}>
        <FiShoppingCart size={32} />
      </Link>
      <span className="text-sm font-semibold rounded-full bg-white">
        {SumaItemsCarrito(itemsCarrito)}
      </span>
    </motion.div>
  );
}
