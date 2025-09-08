"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <footer
      id="contact"
      className="bg-blue-900 text-white text-center py-16 px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Ready for a <span className="text-yellow-500">Luxury Escape?</span>
      </motion.h2>
      <motion.p
        className="text-lg mb-8 text-white/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        Book your stay today and experience unmatched elegance.
      </motion.p>
      <motion.a
        href="#"
        className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Reserve Now
      </motion.a>
    </footer>
  );
}