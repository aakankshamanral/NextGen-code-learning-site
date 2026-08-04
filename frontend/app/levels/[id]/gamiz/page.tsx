"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bug,
  Lock,
  Sparkles,
  Brain,
  Puzzle,
  Swords,
  Rocket,
  X,
} from "lucide-react";
import { LEVEL_DATA } from "@/data/levels";

export default function GamizPage() {
  const { id } = useParams();
  const router = useRouter();
  const level = LEVEL_DATA[id as string];

  const [showTutorial, setShowTutorial] = useState(false);

  const comingSoon = [
    {
      title: "Memory Match",
      icon: <Brain size={28} />,
    },
    {
      title: "Puzzle Builder",
      icon: <Puzzle size={28} />,
    },
    {
      title: "Boss Battle",
      icon: <Swords size={28} />,
    },
    {
      title: "Code Race",
      icon: <Rocket size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">

      {/* Navbar */}

      <div className="sticky top-0 z-20 border-b border-gray-800 bg-[#11151d]/95 backdrop-blur">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-3xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            GAMIZ
          </h1>

          <div className="text-sm text-gray-400">
            Chapter {id}
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >

          <h2 className="text-5xl font-black mb-5">
            Learn C Through Games 🎮
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Learn every chapter through interactive games.
            Earn XP, improve your coding skills and become a C Programming Master.
          </p>

        </motion.div>

        {/* Available Game */}

        <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
          <Sparkles className="text-yellow-400" />
          Available Game
        </h3>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-3xl p-8 shadow-xl"
        >

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            <div className="flex-1">

              <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">

                <Bug
                  size={42}
                  className="text-cyan-400"
                />

              </div>

              <h2 className="text-3xl font-black mb-3">
                🐞 Bug Hunter
              </h2>

              <p className="text-gray-300 leading-7 max-w-xl">
                Become a Bug Hunter and eliminate syntax errors hiding
                inside C programs.
                Complete
                <span className="font-bold text-cyan-400">
                  {" "}5 unique bug missions{" "}
                </span>
                to finish this chapter.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    router.push(`/levels/${id}/gamiz/bug-hunter`)
                  }
                  className="bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black text-lg shadow-lg"
                >
                  🎮 PLAY
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowTutorial(true)}
                  className="bg-[#161B22] border border-gray-700 hover:border-cyan-400 px-8 py-4 rounded-2xl font-bold"
                >
                  📖 Tutorial
                </motion.button>

              </div>

            </div>

            <motion.div
              animate={{
                rotate: [0, -6, 6, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="text-[120px]"
            >
              🐞
            </motion.div>

          </div>

        </motion.div>

        {/* Coming Soon */}

        <div className="mt-20">

          <h3 className="flex items-center gap-2 text-xl font-bold mb-6">

            <Lock className="text-gray-400" />

            More Games Coming Soon

          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {comingSoon.map((game) => (

              <motion.div
                key={game.title}
                whileHover={{ y: -8 }}
                className="bg-[#161B22] rounded-3xl border border-gray-800 p-8 opacity-70 hover:opacity-100 transition"
              >

                <div className="flex justify-between">

                  <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center text-cyan-400">

                    {game.icon}

                  </div>

                  <Lock
                    size={18}
                    className="text-gray-500"
                  />

                </div>

                <h4 className="mt-6 text-xl font-bold">
                  {game.title}
                </h4>

                <p className="text-gray-500 mt-2">
                  Coming Soon...
                </p>

              </motion.div>

            ))}

          </div>

        </div>
                {/* Tutorial Modal */}

        {showTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full max-w-xl rounded-3xl bg-[#161B22] border border-cyan-500/30 shadow-2xl"
            >

              {/* Header */}

              <div className="flex items-center justify-between border-b border-gray-700 px-8 py-6">

                <div>

                  <h2 className="text-2xl font-black text-cyan-400">
                    📖 {level.bugHunterTutorial?.title}
                  </h2>

                </div>

                <button
                  onClick={() => setShowTutorial(false)}
                  className="p-2 rounded-full hover:bg-gray-800 transition"
                >
                  <X size={28} />
                </button>

              </div>

              {/* Body */}

<div className="p-6">

  <div className="space-y-4">

    {level.bugHunterTutorial?.points.map((point, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.08 }}
        className="flex items-start gap-3 rounded-xl bg-[#0D1117] border border-gray-800 p-3"
      >

        <div className="w-7 h-7 rounded-full bg-cyan-500 text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
          {index + 1}
        </div>

        <p className="text-sm text-gray-300 leading-6">
          {point}
        </p>

      </motion.div>

    ))}

  </div>

</div>
              
              {/* Footer */}

              <div className="border-t border-gray-700 p-6">

                <button
                  onClick={() => setShowTutorial(false)}
                  className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black py-3 font-bold"
                >
                  🚀 Let's Hunt Bugs!
                </button>

              </div>

            </motion.div>

          </div>
        )}

      </div>
    </div>
  );
}