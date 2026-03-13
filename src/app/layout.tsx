import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nath's Portfolio",
  description: "Personal portfolio and web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-16 md:pt-0 pl-0 border-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
