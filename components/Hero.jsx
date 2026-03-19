"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const startDate = new Date("2025-12-19");
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <section className="text-center py-24 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold text-pink-600"
      >
        Miguel ❤️ Livia
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-600 text-xl"
      >
        Nosso cantinho na internet
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
        <p className="text-gray-500">Estamos juntos há</p>
        <p className="text-6xl font-bold text-pink-500 mt-2">{days}</p>
        <p className="text-gray-500">dias</p>
      </motion.div>
    </section>
  );
}