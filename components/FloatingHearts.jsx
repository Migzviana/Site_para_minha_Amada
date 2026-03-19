/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const emojis = ["❤️", "💖", "💕", "💗"];

export default function FloatingHearts() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!width) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => {
        const size = random(20, 50);
        const startX = random(0, width);
        const duration = random(12, 22);

        return (
          <motion.div
            key={i}
            initial={{ x: startX, y: "110vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              x: [startX, startX + random(-60, 60), startX],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: random(0, 10),
              ease: "linear",
            }}
            style={{
              position: "absolute",
              fontSize: size,
              filter: "blur(0.5px)",
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </motion.div>
        );
      })}
    </div>
  );
}