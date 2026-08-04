"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LEVEL_DATA } from "@/data/levels";
import BugHunterGame from "./BugHunterGame";
import Crosshair from "./Crosshair";

export default function BugHunterPage() {
  const params = useParams();
  const router = useRouter();

  const levelId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const level = LEVEL_DATA[levelId as keyof typeof LEVEL_DATA];

  if (!level) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center text-white">
        <h1 className="text-4xl font-black">Level Not Found</h1>
      </div>
    );
  }

  if (!level.bugHunter || level.bugHunter.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex flex-col items-center justify-center text-white">

        <div className="text-8xl mb-6">
          🐞
        </div>

        <h1 className="text-5xl font-black mb-4">
          Bug Hunter
        </h1>

        <p className="text-gray-400 mb-8">
          No missions found for this chapter.
        </p>

        <button
          onClick={() => router.back()}
          className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition"
        >
          ← Back to Gamiz
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">

      {/* ---------------- NAVBAR ---------------- */}

      <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#11151d]/95 backdrop-blur">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="text-center">

            <h1 className="text-3xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🐞 BUG HUNTER
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mt-1">
              SHOOT • REPAIR • WIN
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              Chapter
            </p>

            <h2 className="font-black text-cyan-400">
              {levelId}
            </h2>

          </div>

        </div>

      </header>

      {/* ---------------- HERO ---------------- */}

      <section className="max-w-6xl mx-auto px-8 pt-10">

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-5xl font-black mb-5">

                Welcome Bug Hunter 👾

              </h2>

              <p className="text-lg text-gray-300 leading-8 max-w-2xl">

                Shoot only the incorrect syntax,
                repair the code,
                complete all
                <span className="text-cyan-400 font-bold">
                  {" "}5 missions{" "}
                </span>
                and become the ultimate Bug Hunter.

              </p>

            </div>

            <div className="text-[120px] animate-bounce">

              🤖

            </div>

          </div>

        </div>

      </section>

      {/* ---------------- GAME ---------------- */}

      <main className="py-10">

        <BugHunterGame
          questions={level.bugHunter}
        />

      </main>

    </div>
  );
}