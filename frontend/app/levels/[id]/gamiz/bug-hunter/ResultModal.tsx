"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RotateCcw, Home, Star } from "lucide-react";
import { ResultModalProps } from "./types";

export default function ResultModal({
  open,
  score,
  total,
  onRestart,
  onExit,
}: ResultModalProps) {

  if (!open) return null;

  const percentage = Math.round((score / total) * 100);

  let stars = 1;
  let title = "Beginner Hunter 🐣";

  if (percentage >= 100) {
    stars = 5;
    title = "Legendary Bug Hunter 👑";
  } else if (percentage >= 80) {
    stars = 4;
    title = "Master Bug Hunter 🏆";
  } else if (percentage >= 60) {
    stars = 3;
    title = "Pro Debugger 💻";
  } else if (percentage >= 40) {
    stars = 2;
    title = "Junior Hunter 🔍";
  }

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          initial={{ scale: 0.8, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8 }}
          className="bg-[#161B22] border border-cyan-500/20 rounded-3xl w-full max-w-lg overflow-hidden"
        >

          {/* Header */}

          <div className="text-center p-8">

            <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto">

              <Trophy
                size={48}
                className="text-yellow-400"
              />

            </div>

            <h1 className="text-4xl font-black mt-6">

              Mission Complete!

            </h1>

            <p className="text-gray-400 mt-2">

              Great job, Bug Hunter!

            </p>

          </div>

          {/* Stars */}

          <div className="flex justify-center gap-2">

            {[1,2,3,4,5].map((item)=>(
              <Star
                key={item}
                size={30}
                fill={item<=stars ? "#FACC15" : "none"}
                className={
                  item<=stars
                    ? "text-yellow-400"
                    : "text-gray-700"
                }
              />
            ))}

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5 px-8 mt-8">

            <div className="rounded-2xl bg-[#0D1117] p-5 text-center">

              <p className="text-gray-500 text-sm">

                Score

              </p>

              <h2 className="text-4xl font-black text-cyan-400 mt-2">

                {score}/{total}

              </h2>

            </div>

            <div className="rounded-2xl bg-[#0D1117] p-5 text-center">

              <p className="text-gray-500 text-sm">

                Accuracy

              </p>

              <h2 className="text-4xl font-black text-green-400 mt-2">

                {percentage}%

              </h2>

            </div>

          </div>

          {/* Rank */}

          <div className="px-8 mt-6">

            <div className="rounded-2xl bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/20 p-5 text-center">

              <p className="text-gray-500 uppercase tracking-widest text-xs">

                Rank

              </p>

              <h2 className="text-2xl font-black mt-2">

                {title}

              </h2>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-4 p-8">

            <button
              onClick={onRestart}
              className="bg-cyan-500 hover:bg-cyan-400 text-black rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
            >

              <RotateCcw size={20} />

              Play Again

            </button>

            <button
              onClick={onExit}
              className="bg-[#0D1117] border border-gray-700 hover:border-cyan-400 rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
            >

              <Home size={20} />

              Exit

            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}