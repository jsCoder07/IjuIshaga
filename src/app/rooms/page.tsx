"use client"

import { motion } from "framer-motion"
import rooms from "@/data/rooms.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"


export default function Rooms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white"
    >
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-gold-400 mb-12">Our Rooms</h1>
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-navy-800 border-gold-400/40">
                <CardHeader>
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={400}
                    height={250}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-gold-400 mt-4">{room.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{room.description}</p>
                  <p className="mt-4 text-gold-400 font-semibold">₦{room.price}/night</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
