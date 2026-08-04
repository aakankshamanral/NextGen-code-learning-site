"use client";

import { useState } from "react";

import HUD from "./HUD";
import CodeEditor from "./CodeEditor";
import RepairModal from "./RepairModal";
import ResultModal from "./ResultModal";

import { BugQuestion } from "./types";

interface Props {
  questions: BugQuestion[];
}

export default function BugHunterGame({
  questions,
}: Props) {

  const [mission, setMission] = useState(0);

  const [score, setScore] = useState(0);

  const [attempts, setAttempts] = useState(0);

  const [hint, setHint] = useState(false);

  const [selectedToken, setSelectedToken] =
    useState<string | null>(null);

  const [shooting, setShooting] =
    useState(false);

  const [repairOpen, setRepairOpen] =
    useState(false);

  const [resultOpen, setResultOpen] =
    useState(false);

  const current =
    questions[mission];

  /* ---------------- Shoot ---------------- */

  const handleShoot = (token: string) => {

  setSelectedToken(token);

  setShooting(true);

  setTimeout(() => {

    setShooting(false);

    if (token === current.wrongToken) {

      setRepairOpen(true);

    } else {

      const nextAttempts = attempts + 1;

      setAttempts(nextAttempts);

      if (nextAttempts >= 3) {

        setHint(true);

      }

    }

  }, 450);

};
    /* ---------------- Repair ---------------- */

  const handleRepair = (answer: string) => {

    setRepairOpen(false);

    if (answer === current.correctFix) {

      setScore((prev) => prev + 1);

    }

    nextMission();

  };

  /* ---------------- Next Mission ---------------- */

  const nextMission = () => {

    setAttempts(0);

    setHint(false);

    setSelectedToken(null);

    if (mission + 1 >= questions.length) {

      setResultOpen(true);

      return;

    }

    setMission((prev) => prev + 1);

  };

  /* ---------------- Restart ---------------- */

  const restartGame = () => {

    setMission(0);

    setScore(0);

    setAttempts(0);

    setHint(false);

    setSelectedToken(null);

    setRepairOpen(false);

    setResultOpen(false);

  };

  /* ---------------- UI ---------------- */

  return (

    <div className="max-w-7xl mx-auto px-8 pb-16">

      <HUD
        mission={mission + 1}
        total={questions.length}
        attempts={attempts}
        score={score}
      />

      <CodeEditor
  code={current.code}
  wrongToken={current.wrongToken}
  selectedToken={selectedToken}
  hint={hint}
  onSelect={setSelectedToken}
  onShoot={() => {
    if (selectedToken) {
      handleShoot(selectedToken);
    }
  }}
/>

      {/* Hint Message */}

      {hint && (

        <div className="mt-8">

          <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-5 text-center">

            <h2 className="text-yellow-400 text-xl font-black">

              🤖 Need some help?

            </h2>

            <p className="text-gray-300 mt-2">

              The incorrect syntax is now highlighted.
              Shoot the glowing bug!

            </p>

          </div>

        </div>

      )}

      <RepairModal
        open={repairOpen}
        wrongToken={current.wrongToken}
        fixes={current.fixes}
        onSubmit={handleRepair}
      />

      <ResultModal
        open={resultOpen}
        score={score}
        total={questions.length}
        onRestart={restartGame}
        onExit={() => window.history.back()}
      />
          </div>

  );

}