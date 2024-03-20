import React from "react";
import { FaSpinner } from "react-icons/fa6";

function loading() {
  return (
    <div className="mt-7 flex flex-col justify-center items-center">
      <FaSpinner color="#DDD" size={70} />
    </div>
  );
}

export default loading;
