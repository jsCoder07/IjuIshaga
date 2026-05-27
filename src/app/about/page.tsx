"use client";

import { motion } from "framer-motion";



export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/textures/marble.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
           About Us: The Legacy of <span className="text-yellow-500">Iju Ishaga City Lodge</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
           For over a generation, <strong>221 Iju-Ishaga Road (Gudugba Bus Stop)</strong> was known to locals, travelers, and Lagos residents as the iconic <strong>WAB Hotel</strong>. 
            As a landmark of hospitality in the Iju Ishaga area, the venue built a reputation for community, rest, and convenience.
          </motion.p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
    From WAB Hotel to Premium Affordable Luxury
  </h2>
           <motion.p
           className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
          To better serve our historic community and modern travelers, the management embarked on an extensive transformation. 
             Today, the legacy of the old <strong>WAB Hotel</strong> lives on through the fully upgraded, newly rebranded <strong>Iju Ishaga City Lodge Hotel</strong>.
          </motion.p>

           <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
         We have completely reimagined our accommodations, installing state-of-the-art security features, fully air-conditioned luxury rooms, uncompromised power supply, and an exclusive premium bar and lounge layout. While our name and amenities 
             have evolved into world-class standards, our commitment to being the most reliable hotel landmark in Ifako-Ijaiye remains unchanged.
          </motion.p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
    Why Guests Choose Our Iju-Ishaga Hotel Location
  </h2>
  
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-6">
    <li><strong>Historic Landmark:</strong> Effortless to locate for drivers, local transport, and delivery services due to our famous heritage as the former WAB Hotel.</li>
    <li><strong>Prime Lagos Accessibility:</strong> Strategically situated right along the main Iju-Ishaga Road near Gudugba.</li>
    <li><strong>Unmatched Comfort & Security:</strong> Upgraded infrastructure designed for ultimate peace of mind.</li>
  </ul>
        </div>
      </section>
    </main>
  );
}
