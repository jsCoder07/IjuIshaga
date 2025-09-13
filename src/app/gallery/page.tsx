"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";



const images = [
  { src: "/gallery/room1.jpg", alt: "Deluxe Room" },
  { src: "/gallery/room2.jpg", alt: "Executive Suite" },
  { src: "/gallery/dining.png", alt: "Fine Dining Experience" },
  { src: "/gallery/spa.png", alt: "Luxury Spa" },
  { src: "/gallery/lobby.jpg", alt: "Elegant Lobby" },
  { src: "/gallery/pool.jpg", alt: "Infinity Pool" },
  { src: "/gallery/exterior.jpg", alt: "Hotel Exterior" },
  { src: "/gallery/event.jpg", alt: "Ballroom & Events" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <section className="relative py-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/textures/gold-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Our <span className="text-yellow-500">Gallery</span>
          </motion.h1>

          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: false }}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1000}
              height={700}
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
