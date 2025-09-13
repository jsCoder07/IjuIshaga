"use client";

import { motion } from "framer-motion";



export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/textures/marble.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold text-center text-blue-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            About <span className="text-yellow-500">Luxury Stay</span>
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Nestled in the heart of Nigeria, Luxury Stay Hotel offers more than just
            accommodation — we offer an experience. From our elegant architecture
            to our world-class hospitality, every detail is designed to bring comfort,
            sophistication, and unforgettable memories.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
