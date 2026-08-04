"use client";

import { motion } from "framer-motion";
import { Target, Trophy } from "lucide-react";
import { HUDProps } from "./types";

export default function HUD({
  mission,
  total,
  attempts,
  score,
}: HUDProps) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="max-w-6xl mx-auto mb-8"
    >
      <div className="grid md:grid-cols-3 gap-5">

        {/* Mission */}

        <div className="bg-[#161B22] border border-cyan-500/20 rounded-3xl p-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

              <Target
                className="text-cyan-400"
                size={28}
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
                Mission
              </p>

              <h2 className="text-3xl font-black">

                {mission}/{total}

              </h2>

            </div>

          </div>

        </div>

        {/* Attempts */}

        <div className="bg-[#161B22] border border-orange-500/20 rounded-3xl p-6">

          <div className="flex items-center gap-4">

            <div className="text-5xl">
              🎯
            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
                Attempts
              </p>

              <h2
                className={`text-3xl font-black ${
                  attempts >= 3
                    ? "text-red-400"
                    : "text-orange-400"
                }`}
              >

                {attempts}/3

              </h2>

            </div>

          </div>

        </div>

        {/* Score */}

        <div className="bg-[#161B22] border border-yellow-500/20 rounded-3xl p-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

              <Trophy
                className="text-yellow-400"
                size={28}
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.25em] text-xs text-gray-500">
                Score
              </p>

              <h2 className="text-3xl font-black text-yellow-400">

                {score}

              </h2>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}