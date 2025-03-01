import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./providers"; 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata:Metadata = {
    title:{
        absolute:"",
        default:"Next js",
        template:"%s/codeevolution"
    },
    description:"generated",

    }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
