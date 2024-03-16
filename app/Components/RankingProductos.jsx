import React from "react";
import { FaRegStar } from "react-icons/fa6";

export function RankingProductos({ pro_puntos }) {
  const starStyle = {
    background: `linear-gradient(to right, yellow ${
      pro_puntos * 1
    }%, transparent ${pro_puntos * 1}%)`,
  };

  return (
    <div className="text-center">
      <div className="flex flex-row bg-yellow-300 rounded-md" style={starStyle}>
        <FaRegStar className="" size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
        <FaRegStar size={20} />
      </div>
    </div>
  );
}
