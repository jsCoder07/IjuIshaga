"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";


export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/textures/gold-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <motion.h1
            className="text-4xl font-bold text-center text-blue-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-yellow-500">Us</span>
          </motion.h1>

          <form className="space-y-6 bg-white shadow-lg p-8 rounded-2xl">
            <Input placeholder="Your Name" className="border-gray-300" />
            <Input placeholder="Your Email" type="email" className="border-gray-300" />
            <Textarea placeholder="Your Message" className="border-gray-300" />
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold">
              Send Message
            </Button>
          </form>

          <div className="mt-12 text-center text-gray-700">
            <p className="flex justify-between"><GiRotaryPhone /> +234 703 377 7772</p>
            <p className="flex justify-between"><MdEmail /> reservations@ijuishagacitylodge.com.ng</p>
            <p className="flex justify-between"><ImLocation2 /> 221 Iju-Ishaga Road (Gudugba Bus Stop) Ifako-Ijaiye, Lagos</p>
          </div>
        </div>
      </section>
    </main>
  );
}
