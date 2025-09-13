"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FeaturedRooms from "./components/FeaturedRooms";
import About from "./components/About";
import Amenities from "./components/Ammenities";
import Nav from "./components/Nav";
import Head from "next/head";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
    <Head>
        <title>Client Side Page</title>
        <meta name="description" content="Metadata for client page" />
      </Head>
    <main className="overflow-hidden">
      
      <Nav/>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white">
        <div className="absolute inset-0 bg-[url('/textures/gold-pattern.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Experience True <span className="text-yellow-400">Luxury</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          >
            Welcome to our elegant hotel in Nigeria — where comfort meets sophistication.
             <Image
                      src="/hotelIju.png"
                      alt="Hotel"
                      width={1200}
                      height={800}
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
          </motion.p>
           
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white text-blue-900">
        <div className="absolute inset-0 bg-[url('/textures/marble.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-500">Our Hotel</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nestled in the heart of Nigeria, our luxury hotel offers world-class
              amenities, stunning architecture, and unmatched hospitality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are here for business, relaxation, or adventure, we ensure
              every moment is a memorable experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/hotelIju.png"
              alt="Hotel Exterior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms (JSON-driven) */}
   <FeaturedRooms/>

      {/* Dining */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white">
        <div className="absolute inset-0 bg-[url('/textures/gold-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            A <span className="text-yellow-400">Dining Experience</span> to Remember
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 mb-10"
          >
            Indulge in gourmet cuisine prepared by world-class chefs, blending
            international flavors with local inspiration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/dinning.jpg"
              alt="Dining"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white text-blue-900">
        <div className="absolute inset-0 bg-[url('/textures/marble.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            World-Class <span className="text-yellow-500">Amenities</span>
          </motion.h2>
          
            <Amenities/>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/textures/gold-pattern.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Book Your Stay Today
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 mb-6"
          >
            Experience the pinnacle of comfort, elegance, and hospitality.
          </motion.p>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.6, duration: 1 }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-full shadow-lg hover:shadow-yellow-200/50 hover:scale-105 transition"
          >
            Reserve Now
          </motion.button>
        </div>
      </footer>
    </main>
    </>
  );
}