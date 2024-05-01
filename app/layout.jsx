import React, { Suspense } from "react";
import "./globals.css";
import { Header, NavBar, NavBarAdmin } from "@/app/ui";
import Footer from "@/app/ui/Footer";
import { ProviderRedux } from "@/Redux/Provider";
import { NavbarSkeleton, FormContacto } from "@/app/Components";

export const metadata = {
  title: "Home - E-Commerce Next",
  description: "Desarrollado por Deweb-Desarrollos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 mt-40">
        <ProviderRedux>
          <Header />
          <Suspense fallback={<NavbarSkeleton />}>
            <NavBar />
          </Suspense>
          <NavBarAdmin />
          <>{children}</>
          <Footer formContacto={<FormContacto />} />
        </ProviderRedux>
      </body>
    </html>
  );
}
