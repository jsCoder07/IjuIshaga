"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-blue-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/hotel-lobby.png"
            alt="Hotel Lobby"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-yellow-500">Iju Ishaga Lodge</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Iju Ishaga Lodge is a haven of sophistication and comfort. Located in the
            heart of Nigeria, we combine world-class hospitality with local
            elegance to create an unforgettable experience for every guest.
          </p>
          <p className="text-lg leading-relaxed">
            From spacious suites to exquisite dining, every detail is designed
            to indulge your senses and exceed your expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}