"use client";

import { motion } from "framer-motion";
import { FaSwimmingPool, FaSpa, FaWifi, FaDumbbell, FaCar } from "react-icons/fa";

const amenities = [
  { icon: <FaSwimmingPool size={40} />, name: "Infinity Pool" },
  { icon: <FaSpa size={40} />, name: "Luxury Spa" },
  { icon: <FaWifi size={40} />, name: "Free High-Speed WiFi" },
  { icon: <FaDumbbell size={40} />, name: "Fitness Center" },
  { icon: <FaCar size={40} />, name: "Valet Parking" },
];

export default function Amenities() {
  return (
    <section className="py-20 bg-blue-50 text-blue-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          World-Class <span className="text-yellow-500">Amenities</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-500 mb-4">{amenity.icon}</div>
              <p className="font-bold text-lg">{amenity.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}