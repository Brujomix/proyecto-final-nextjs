import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 mt-4 bg-neutral-900 text-white italic p-4">
      <div>
        <span>Formulario contacto</span>
      </div>
      <div>
        <ul className="space-y-2">
          <li>dewebdesarrollos@gmail.com</li>
          <li>3464551205</li>
          <li>Casilda - SantaFe</li>
          <li>Argentina</li>
        </ul>
      </div>
      <div className="col-span-2 text-start mt-4 ">
        <span className="opacity-50 tracking-widest">
          © Copyright - DewebDesarrollos 2024
        </span>
      </div>
    </footer>
  );
}
