"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Wrench } from "lucide-react";
import { RepairModalProps } from "./types";

export default function RepairModal({
  open,
  wrongToken,
  fixes,
  onSubmit,
}: RepairModalProps) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (!open) {
      setSelected("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          initial={{ scale: 0.8, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-xl rounded-3xl bg-[#161B22] border border-cyan-500/20 overflow-hidden"
        >

          {/* Header */}

          <div className="border-b border-gray-800 p-6 flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

              <Wrench
                className="text-cyan-400"
                size={28}
              />

            </div>

            <div>

              <h2 className="text-2xl font-black">
                Repair the Code
              </h2>

              <p className="text-gray-400">
                Choose the correct replacement.
              </p>

            </div>

          </div>

          {/* Wrong Token */}

          <div className="px-8 pt-6">

            <p className="text-sm uppercase tracking-widest text-gray-500">
              Eliminated Bug
            </p>

            <div className="mt-3 inline-block px-5 py-3 rounded-xl bg-red-500/20 border border-red-500 text-red-300 font-mono text-2xl">

              {wrongToken}

            </div>

          </div>

          {/* Options */}

          <div className="px-8 py-8 space-y-4">

            {fixes.map((fix) => (

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={fix}
                onClick={() => setSelected(fix)}
                className={`
                  w-full rounded-2xl border p-5 text-left transition

                  ${
                    selected === fix
                      ? "border-cyan-400 bg-cyan-500/15"
                      : "border-gray-700 bg-[#0D1117] hover:border-cyan-500"
                  }
                `}
              >

                <div className="flex justify-between items-center">

                  <span className="font-mono text-lg">
                    {fix}
                  </span>

                  {selected === fix && (
                    <CheckCircle2
                      size={22}
                      className="text-cyan-400"
                    />
                  )}

                </div>

              </motion.button>

            ))}

          </div>

          {/* Footer */}

          <div className="border-t border-gray-800 p-6">

            <button
  disabled={!selected}
  onClick={() => onSubmit(selected)}
  className={`
    w-full rounded-2xl py-4 font-black transition

    ${
      selected
        ? "bg-cyan-500 hover:bg-cyan-400 text-black"
        : "bg-gray-700 text-gray-500 cursor-not-allowed"
    }
  `}
>
  Submit Answer
</button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}