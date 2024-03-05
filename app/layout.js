import "./globals.css";
import { Header } from "./ui";
import Footer from "./ui/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container m-auto bg-neutral-100">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
