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

const Nav = () => {
  return (
    
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 bg-blue-900/40 backdrop-blur-lg shadow-md">
        <div className="text-2xl font-bold text-white"> <Image src="/logo.png" alt="logo" width={46} height={50}/> </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          <li className="hover:text-yellow-400 transition cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-400 transition cursor-pointer">
            {/* <DropdownMenu>
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
</DropdownMenu> */}
<Link href="/rooms">Rooms</Link>
</li>
 <li className="hover:text-yellow-400 transition cursor-pointer"><Link href="/gallery">Gallery</Link></li>
         
          <li className="hover:text-yellow-400 transition cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>
<Link href="/booking">
        <Button className="hidden md:block bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-6 py-2 font-bold">
          Book Now
        </Button>
</Link>
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
                  <Link href="/">Home</Link>
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <Link href="/rooms">Roomss</Link>
                 {/* <DropdownMenu>
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
</DropdownMenu> */}
                </a>
               
                <a href="#" className="hover:text-yellow-400 transition">
                  <Link href="/contact">Contact</Link>
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <Link href="/gallery">Gallery</Link>
                </a>
              </nav>
              <div className="mt-8">
                <Link href="/booking">
                <Button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-500 rounded-full px-6 py-3 font-bold">
                  Book Now
                </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
  )
}

export default Nav
