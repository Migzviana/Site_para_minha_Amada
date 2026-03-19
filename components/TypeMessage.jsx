"use client";

import { useState, useEffect } from "react";

export default function TypeMessage({ text }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-gray-700">
      {display}
      <span className="animate-pulse">|</span>
    </p>
  );
}