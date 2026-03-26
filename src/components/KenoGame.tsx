
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw, Zap } from "lucide-react";

const TOTAL_NUMBERS = 40;
const MAX_PICKS = 10;
const DRAW_COUNT = 10;

const KenoGame = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [gamePhase, setGamePhase] = useState<"picking" | "drawing" | "results">("picking");

  const toggleNumber = (num: number) => {
    if (gamePhase !== "picking") return;
    setSelectedNumbers((prev) => {
      if (prev.includes(num)) return prev.filter((n) => n !== num);
      if (prev.length >= MAX_PICKS) return prev;
      return [...prev, num];
    });
  };

  const quickPick = () => {
    if (gamePhase !== "picking") return;
    const nums: number[] = [];
    while (nums.length < MAX_PICKS) {
      const r = Math.floor(Math.random() * TOTAL_NUMBERS) + 1;
      if (!nums.includes(r)) nums.push(r);
    }
    setSelectedNumbers(nums.sort((a, b) => a - b));
  };

  const drawNumbers = useCallback(() => {
    if (selectedNumbers.length === 0) return;
    setGamePhase("drawing");
    setIsDrawing(true);
    setRevealedCount(0);

    const drawn: number[] = [];
    while (drawn.length < DRAW_COUNT) {
      const r = Math.floor(Math.random() * TOTAL_NUMBERS) + 1;
      if (!drawn.includes(r)) drawn.push(r);
    }
    setDrawnNumbers(drawn);

    // Reveal one by one
    drawn.forEach((_, i) => {
      setTimeout(() => {
        setRevealedCount(i + 1);
        if (i === drawn.length - 1) {
          setTimeout(() => {
            setIsDrawing(false);
            setGamePhase("results");
          }, 600);
        }
      }, (i + 1) * 400);
    });
  }, [selectedNumbers]);

  const resetGame = () => {
    setSelectedNumbers([]);
    setDrawnNumbers([]);
    setRevealedCount(0);
    setIsDrawing(false);
    setGamePhase("picking");
  };

  const hits = selectedNumbers.filter((n) => drawnNumbers.slice(0, revealedCount).includes(n));
  const revealedDrawn = drawnNumbers.slice(0, revealedCount);

  const getNumberState = (num: number) => {
    const isSelected = selectedNumbers.includes(num);
    const isDrawn = revealedDrawn.includes(num);
    const isHit = isSelected && isDrawn;
    const isMiss = isDrawn && !isSelected;

    if (isHit) return "hit";
    if (isMiss) return "drawn";
    if (isSelected) return "selected";
    return "default";
  };

  const getNumberClasses = (state: string) => {
    switch (state) {
      case "hit":
        return "bg-green-500 text-white border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-110 ring-2 ring-green-300";
      case "drawn":
        return "bg-yellow-500/80 text-white border-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.4)]";
      case "selected":
        return "bg-uwinn-purple text-white border-uwinn-light shadow-lg";
      default:
        return "bg-white/80 text-uwinn-purple border-gray-200 hover:bg-uwinn-purple/10 hover:border-uwinn-purple/40";
    }
  };

  const multiplier = hits.length === 0 ? 0 : hits.length <= 3 ? hits.length : hits.length <= 6 ? hits.length * 2 : hits.length * 5;

  return (
    <div className="w-full max-w-3xl mx-auto px-3 md:px-4 mb-6 md:mb-12">
      <div className="bg-gradient-to-br from-uwinn-dark via-uwinn-purple to-uwinn-light rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="p-3 md:p-6 text-center border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-uwinn-accent" />
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-wide">INSTANT KENO</h2>
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-uwinn-accent" />
            </div>
            <p className="text-white/60 text-xs md:text-sm">Pick up to {MAX_PICKS} numbers, then draw!</p>
          </div>
        </div>

        {/* Game Board */}
        <div className="p-3 md:p-6">
          <div className="grid grid-cols-5 sm:grid-cols-8 gap-1.5 md:gap-2 mb-4 md:mb-5">
            {Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1).map((num) => {
              const state = getNumberState(num);
              return (
                <button
                  key={num}
                  onClick={() => toggleNumber(num)}
                  disabled={gamePhase !== "picking"}
                  className={`
                    aspect-square rounded-lg md:rounded-xl border-2 font-bold text-xs sm:text-sm md:text-base
                    flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    disabled:cursor-default
                    ${getNumberClasses(state)}
                    ${state === "hit" ? "animate-bounce" : ""}
                  `}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 md:mb-4 px-1">
            <div className="flex items-center gap-3 text-white/80 text-xs md:text-sm">
              <span>Picked: <strong className="text-uwinn-accent">{selectedNumbers.length}/{MAX_PICKS}</strong></span>
              {gamePhase !== "picking" && (
                <span>Hits: <strong className="text-green-400">{hits.length}</strong></span>
              )}
            </div>
            {gamePhase === "results" && (
              <div className="flex items-center gap-1 text-uwinn-accent font-bold animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>{multiplier}x Multiplier!</span>
              </div>
            )}
          </div>

          {/* Drawn Numbers Display */}
          {gamePhase !== "picking" && (
            <div className="mb-4 md:mb-5 p-2.5 md:p-3 bg-black/20 rounded-xl border border-white/10">
              <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider mb-2 text-center">Drawn Numbers</p>
              <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                {drawnNumbers.map((num, i) => (
                  <div
                    key={num}
                    className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-xs md:text-sm
                      border-2 transition-all duration-500
                      ${i < revealedCount
                        ? selectedNumbers.includes(num)
                          ? "bg-green-500 border-green-300 text-white shadow-[0_0_12px_rgba(34,197,94,0.5)] scale-110"
                          : "bg-yellow-500/80 border-yellow-400 text-white"
                        : "bg-white/5 border-white/10 text-transparent"
                      }
                    `}
                  >
                    {i < revealedCount ? num : "?"}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Banner */}
          {gamePhase === "results" && (
            <div className={`text-center p-3 md:p-4 rounded-xl mb-3 md:mb-4 animate-scale-in ${
              hits.length >= 5
                ? "bg-gradient-to-r from-yellow-500/20 via-uwinn-accent/20 to-yellow-500/20 border border-uwinn-accent/30"
                : hits.length >= 3
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-white/5 border border-white/10"
            }`}>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {hits.length >= 7 ? "🎉 JACKPOT! 🎉" : hits.length >= 5 ? "🔥 BIG WIN!" : hits.length >= 3 ? "✨ Nice Hit!" : hits.length > 0 ? "Keep Trying!" : "No Luck 😅"}
              </p>
              <p className="text-white/60 text-sm">
                You matched <strong className="text-green-400">{hits.length}</strong> out of {selectedNumbers.length} picks
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {gamePhase === "picking" && (
              <>
                <Button
                  variant="outline"
                  className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={quickPick}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Quick Pick
                </Button>
                <Button
                  className="flex-1 bg-uwinn-accent text-uwinn-dark font-bold hover:bg-uwinn-accent/90 shadow-lg"
                  onClick={drawNumbers}
                  disabled={selectedNumbers.length === 0}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Draw!
                </Button>
              </>
            )}
            {gamePhase === "results" && (
              <Button
                className="w-full bg-uwinn-accent text-uwinn-dark font-bold hover:bg-uwinn-accent/90 shadow-lg"
                onClick={resetGame}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Play Again
              </Button>
            )}
            {gamePhase === "drawing" && (
              <div className="w-full text-center py-2">
                <p className="text-uwinn-accent font-semibold animate-pulse">Drawing numbers...</p>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="px-4 md:px-6 pb-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/40">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-uwinn-purple border border-uwinn-light inline-block" /> Your Pick</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-500 inline-block" /> Drawn</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500 inline-block" /> Hit!</span>
        </div>
      </div>
    </div>
  );
};

export default KenoGame;
