"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    "Primeiro encontro ❤️",
    "Primeiro beijo 💋",
    "Primeiro mês juntos 💖",
  ];

  return (
    <div className="mt-16 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-pink-500">
        Nossa história
      </h2>

      <div className="relative border-l-2 border-pink-300 mt-10 pl-6">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="mb-6"
          >
            <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-1.5 top-2" />
            <p className="text-gray-600">{e}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}