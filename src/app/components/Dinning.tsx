"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Dining() {
  return (
    <section id="dining" className="py-20 bg-white text-blue-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Exquisite <span className="text-yellow-500">Dining</span> Experience
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Indulge in a fine dining experience curated by world-class chefs.
            From traditional flavors to international delicacies, every dish is
            crafted to perfection.
          </p>
          <p className="text-lg leading-relaxed">
            Enjoy an elegant setting, a curated wine selection, and impeccable
            service that elevates every meal into an unforgettable experience.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/dinning.jpg"
            alt="Dining"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}