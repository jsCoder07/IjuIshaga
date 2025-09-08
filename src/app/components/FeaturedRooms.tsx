"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import roomsData from "@/data/rooms.json";

export default function FeaturedRooms() {
  return (
    <section className="py-20  bg-blue-900 text-blue-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-yellow-500">Luxury Rooms</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                <p className="text-blue-800 text-sm mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">{room.price}</span>
                  <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}