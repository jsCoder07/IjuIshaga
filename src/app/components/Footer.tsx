"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Footer() {
  return (
   <motion.footer
      
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="bg-navy-950 text-white border-t border-gold-400/30"
>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-gold-400">Iju Ishaga Lodge</h2>
          <p className="mt-4 text-sm text-gray-300">
            Experience timeless elegance and world-class hospitality in the heart of Nigeria.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
          <h3 className="text-lg font-semibold text-gold-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold-400">About Us</Link></li>
            <li><Link href="/rooms" className="hover:text-gold-400">Rooms</Link></li>
            <li><Link href="/booking" className="hover:text-gold-400">Book a Room</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
          <h3 className="text-lg font-semibold text-gold-400 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Iju Ishaga Lagos Nigeria</li>
            <li>📞 +234 800 123 4567</li>
            <li>✉️ info@ijuishagacitylodge.com..ng</li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
          <h3 className="text-lg font-semibold text-gold-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="p-2 bg-navy-800 rounded-full hover:bg-gold-400 hover:text-navy-950 transition">
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-navy-800 rounded-full hover:bg-gold-400 hover:text-navy-950 transition">
              <FaInstagramSquare className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-navy-800 rounded-full hover:bg-gold-400 hover:text-navy-950 transition">
              <FaTwitter className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
        className="border-t border-gold-400/20 text-center py-6 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} Iju Ishaga Lodge. All rights reserved.
      </motion.div>
    </motion.footer>
  )
}