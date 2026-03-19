"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { isMonthUnlocked } from "../utils/monthStatus";

export default function MonthCard({ month, id }) {
  const unlocked = isMonthUnlocked(id);

  if (!unlocked) {
    return (
      <div className="bg-gray-200 p-6 rounded-2xl opacity-60 shadow">
        <h2 className="text-2xl text-gray-500">{month}</h2>
        <p className="mt-2 text-gray-400">🔒 Disponível em breve</p>
      </div>
    );
  }

  return (
    <Link href={`/month/${id}`}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h2 className="text-2xl font-bold text-pink-500">{month}</h2>
        <p className="text-gray-500 mt-2">Ver memórias 💌</p>
      </motion.div>
    </Link>
  );
}