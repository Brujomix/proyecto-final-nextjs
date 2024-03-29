import React, { Suspense } from "react";
import "./globals.css";
import {
  CarritoIcon,
  Header,
  NavBar,
  NavBarAdmin,
  Usuario_Icon,
  EstadoApp,
} from "./ui";
import Footer from "@/app/ui/Footer";
import { ProviderRedux } from "@/Redux/Provider";
import NavbarSkeleton from "./Components/Skeletons/NavbarSkeleton";

export const metadata = {
  title: "Home - E-Commerce Next",
  description: "Desarrollado por Deweb-Desarrollos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <ProviderRedux>
          <EstadoApp />
          <div className="flex flex-row justify-start items-center bg-neutral-300 fixed top-9 w-full p-2">
            <Usuario_Icon />
            <CarritoIcon />
          </div>
          <Header />
          <Suspense fallback={<NavbarSkeleton />}>
            <NavBar />
          </Suspense>

          <NavBarAdmin />

          <div>{children}</div>
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  );
}
