import React from "react";
import { FormContacto } from "@/app/Components";

export default function Footer({formContacto}) {
  return (
    <footer className="flex flex-col items-center gap-4 bg-white md:grid md:grid-cols-2 mt-4 italic p-4">
      <div>
        <ul className="space-y-2">
          <li>dewebdesarrollos@gmail.com</li>
          <li>3464551205</li>
          <li>Casilda - SantaFe</li>
          <li>Argentina</li>
        </ul>
      </div>
      <div>
        {formContacto}
      </div>
      <div className="col-span-2 text-start mt-4 ">
        <span className=" opacity-75 tracking-widest">
          © Copyright - DewebDesarrollos 2024
        </span>
      </div>
    </footer>
  );
}
