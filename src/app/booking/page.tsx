"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";



export default function Booking() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/textures/marble.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-2xl">
          <motion.h1
            className="text-4xl font-bold text-center text-blue-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Your <span className="text-yellow-500">Stay</span>
          </motion.h1>

          <form className="space-y-6 bg-white shadow-xl p-8 rounded-2xl">
            <Input placeholder="Full Name" className="bg-navy-700 text-white" />
          <Input placeholder="Email" type="email" className="bg-navy-700 text-white" />
          <Input placeholder="Phone Number" type="tel" className="bg-navy-700 text-white" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="date" placeholder="Check-in" />
              <Input type="date" placeholder="Check-out" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                <SelectItem value="suite">Executive Suite</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
            <Input type="number" min={1} placeholder="Number of Guests" />
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold">
              Proceed to Payment
            </Button>
          </form>
        </div>
      </section>
      
    </main>
  );
}
