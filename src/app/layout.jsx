import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import React from "react";
import Footer from "./Components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});



export const metadata = {
  title: "Student Assistant",
  description: "Learn With US",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="nord" lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        <header><Navbar/></header>
       
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
