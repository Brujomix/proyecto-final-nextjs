import React from "react";
import "./globals.css";
import { Header, NavBar, NavBarAdmin } from "./ui";
import Footer from "./ui/Footer";
import { ProviderRedux } from "@/Redux/Provider";
import { User_Carrito } from "./Components";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-neutral-100">
        <ProviderRedux>
          <div className="fixed top-0 w-full">
          <User_Carrito/>
          </div>
          <NavBar />
          <Header />
          <NavBarAdmin />
          <div>{children}</div>
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  );
}
