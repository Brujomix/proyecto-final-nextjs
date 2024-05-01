"use client";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export function RealTime() {
  const [now, setNow] = useState();

  useEffect(() => {
    setTimeout(() => {
      setNow(format(new Date(), "dd-MM-yyyy, HH:mm:ss"));
    }, 1000);
  }, [now]);

  return (
    
      <span className="font-md text-center">{now}</span>
    
  );
}
