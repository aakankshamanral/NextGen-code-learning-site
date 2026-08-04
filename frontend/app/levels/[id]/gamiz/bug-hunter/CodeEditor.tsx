"use client";

import { motion } from "framer-motion";
import { CodeEditorProps } from "./types";

export default function CodeEditor({
  code,
  wrongToken,
  selectedToken,
  hint,
  onSelect,
  onShoot,
}: CodeEditorProps) {
  return (
    <div className="max-w-6xl mx-auto mt-8">

      <div className="rounded-3xl overflow-hidden bg-[#161B22] border border-cyan-500/20 shadow-2xl">

        {/* VS Code Header */}

        <div className="flex items-center gap-3 px-6 py-4 bg-[#11151d] border-b border-gray-700">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-gray-400">
            mission.c
          </span>

        </div>

        {/* Title */}

        <div className="px-8 pt-6">

          <h2 className="text-3xl font-black text-cyan-400">
            🎯 Find & Shoot the Bug
          </h2>

          <p className="text-gray-400 mt-2">
            Click the incorrect syntax to lock your target, then press SHOOT.
          </p>

        </div>

        {/* Editor */}

        <div className="bg-[#0D1117] rounded-2xl border border-gray-800 m-8 p-8 font-mono">

          {code.map((line, lineIndex) => {

            const words = line.split(/(\s+|[();{},])/);

            return (

              <div
                key={lineIndex}
                className="flex"
              >

                {/* Line Number */}

                <div className="w-10 text-gray-600 select-none">

                  {lineIndex + 1}

                </div>

                {/* Code */}

                <div className="flex flex-wrap">

                  {words.map((word, index) => {

                    if (word === "")
                      return null;

                    if (/^\s+$/.test(word))
                      return (
                        <span key={index}>
                          {word}
                        </span>
                      );

                    const isWrong =
                      word === wrongToken;

                    const selected =
                      word === selectedToken;

                    return (

                      <motion.span
  key={index}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => onSelect(word)}
  className={`
    cursor-pointer
    rounded
    px-1
    transition-all

    ${
      selected
        ? "bg-red-500 text-white"
        : ""
    }

    ${
      hint && isWrong
        ? "animate-pulse bg-red-500/30 text-red-300"
        : ""
    }

    hover:bg-cyan-500/20
  `}
>
  {word}
</motion.span>

                    );

                  })}

                </div>

              </div>

            );

          })}

        </div>

        {/* Footer */}

        <div className="border-t border-gray-800 px-8 py-6 flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.25em] text-xs text-gray-500">

              Locked Target

            </p>

            <motion.div

              key={selectedToken}

              animate={{
                scale: selectedToken
                  ? [1, 1.05, 1]
                  : 1,
              }}

              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}

              className={`
                mt-3
                inline-block
                px-6
                py-3
                rounded-xl
                font-mono
                text-xl
                border

                ${
                  selectedToken
                    ? "border-red-500 bg-red-500/20 text-red-300"
                    : "border-gray-700 bg-[#0D1117] text-gray-500"
                }

              `}
            >

              {selectedToken || "No Target"}

            </motion.div>

          </div>

          <motion.button

            whileHover={{
              scale: selectedToken
                ? 1.05
                : 1,
            }}

            whileTap={{
              scale: 0.95,
            }}

            disabled={!selectedToken}

            onClick={onShoot}

            className={`
              px-10
              py-4
              rounded-2xl
              font-black
              text-lg

              ${
                selectedToken
                  ? "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }

            `}
          >

            🔫 SHOOT

          </motion.button>

        </div>

      </div>

    </div>
  );
}