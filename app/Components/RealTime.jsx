"use client";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export function RealTime() {
  const [now, setNow] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const DateTime = format(new Date(), "dd-MM-yyyy, HH:mm:ss").split(",");
      setNow(DateTime);
    }, 1000);
  }, [now]);

  return (
    <div className="grid grid-cols-1 text-center">
      <span className="text-xl font-semibold tracking-wide italic">{now[1]}</span>
      <span className="text-sm tracking-wide italic">{now[0]}</span>
    </div>
  );
}
