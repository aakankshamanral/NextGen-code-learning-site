"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  shooting?: boolean;
}

export default function Crosshair({
  shooting = false,
}: Props) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      setMouse({
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: mouse.x - 18,
        y: mouse.y - 18,
        scale: shooting ? [1, 1.3, 1] : 1,
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 800,
          damping: 35,
        },
        y: {
          type: "spring",
          stiffness: 800,
          damping: 35,
        },
      }}
    >
      <div className="relative w-9 h-9">

        <div className="absolute inset-0 rounded-full border-2 border-red-500 shadow-[0_0_12px_red]" />

        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-red-500 -translate-x-1/2" />

        <div className="absolute top-1/2 left-0 h-[2px] w-full bg-red-500 -translate-y-1/2" />

        <div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-red-500 -translate-x-1/2 -translate-y-1/2" />

      </div>
    </motion.div>
  );
}