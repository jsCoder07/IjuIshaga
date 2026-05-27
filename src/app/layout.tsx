"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Iju Ishaga City Lodge | Formerly WAB Hotel Lagos',
  description: 'Stay at Iju Ishaga City Lodge (formerly WAB Hotel) at 221 Iju-Ishaga Road, Gudugba. Enjoy luxury rooms, a premium bar, top security, and affordable hotel rates.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <html>
        <body>
          <Nav/>
 <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <Footer/>
        </body>
      </html>
     
    </AnimatePresence>
  );
}
