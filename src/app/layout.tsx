import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const FiraCode = Fira_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "noo.by",
  description: "A profile about nooby/Noobyguy775/noo.by",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FiraCode.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
