"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Crosshair() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 18,
        y: pos.y - 18,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 35,
      }}
      className="fixed pointer-events-none z-[9999]"
    >
      <div className="relative w-9 h-9">

        <div className="absolute inset-0 rounded-full border-2 border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)]" />

        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500 -translate-x-1/2" />

        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 -translate-y-1/2" />

        <div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-red-500 -translate-x-1/2 -translate-y-1/2" />

      </div>
    </motion.div>
  );
}