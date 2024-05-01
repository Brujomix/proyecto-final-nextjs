import React from "react";

export default function Footer({formContacto}) {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 gap-7 p-20 border-t-2 mt-7 bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="underline tex-lg font-semibold">Informacion Contacto:</span>
        <ul className="space-y-4">
          <li>dewebdesarrollos@gmail.com</li>
          <li>3464551205</li>
          <li>Casilda - SantaFe</li>
          <li>Argentina</li>
        </ul>
      </div>
      <div className="flex justify-center">{formContacto}</div>
      <div className="md:col-span-2 text-center mt-4">
        <span className=" opacity-75 tracking-widest">
          © Copyright - DewebDesarrollos 2024
        </span>
      </div>
    </footer>
  );
}
