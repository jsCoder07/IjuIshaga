"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const headingText = "Welcome to IjuIshaga City Lodge";
const headingWords = headingText.split(" ");

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex flex-col overflow-hidden animated-gradient"
    >
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 bg-blue-900/40 backdrop-blur-lg shadow-md">
        <div className="text-2xl font-bold text-white"> <Image src="/logo.png" alt="logo" width={46} height={50}/> </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          <li className="hover:text-yellow-400 transition cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-400 transition cursor-pointer"><DropdownMenu>
  <DropdownMenuTrigger className="hover:text-yellow-400 transition cursor-pointer">
    Rooms
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-blue-900 text-white border-none shadow-lg">
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Deluxe Room
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Executive Suite
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Presidential Suite
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu></li>
          <li className="hover:text-yellow-400 transition cursor-pointer"><Link href="/Dinning">Dining</Link></li>
          <li className="hover:text-yellow-400 transition cursor-pointer">Contact</li>
        </ul>

        <Button className="hidden md:block bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-6 py-2 font-bold">
          Book Now
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white text-3xl">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-900 text-white p-6">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-6">
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                 <DropdownMenu>
  <DropdownMenuTrigger className="hover:text-yellow-400 transition cursor-pointer">
    Rooms
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-blue-900 text-white border-none shadow-lg">
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Deluxe Room
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Executive Suite
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-yellow-400 hover:text-blue-900 transition cursor-pointer">
      Presidential Suite
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  Dining
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </nav>
              <div className="mt-8">
                <Button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-6 py-3 font-bold">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hotel Image with Parallax & Floating Animation */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hotelIju.png"
            alt="Hotel"
            width={1200}
            height={800}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 mt-16">
        {/* Heading Animation */}
        <motion.h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-white flex flex-wrap justify-center">
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              className="mx-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headingWords.length * 0.15 + 0.5,
            duration: 0.8,
          }}
        >
          Experience comfort, style, and exceptional hospitality at our premium hotel in Nigeria.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: headingWords.length * 0.15 + 1,
            duration: 0.8,
          }}
        >
          <Button
            size="lg"
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-8 py-4 text-lg font-bold shadow-lg"
          >
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}