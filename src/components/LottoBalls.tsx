
import { useEffect, useState } from "react";

const BALL_COLORS = [
  "from-red-500 to-red-600",
  "from-blue-500 to-blue-600",
  "from-green-500 to-green-600",
  "from-yellow-400 to-yellow-500",
  "from-purple-500 to-purple-600",
  "from-pink-500 to-pink-600",
  "from-orange-500 to-orange-600",
];

interface Ball {
  id: number;
  number: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  startX: number;
}

const LottoBalls = () => {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    const generateBalls = () => {
      const newBalls: Ball[] = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        number: Math.floor(Math.random() * 49) + 1,
        color: BALL_COLORS[i % BALL_COLORS.length],
        delay: i * 0.6,
        duration: 3 + Math.random() * 2,
        size: 36 + Math.floor(Math.random() * 16),
        startX: 10 + (i * 10) + Math.random() * 5,
      }));
      setBalls(newBalls);
    };

    generateBalls();
    const interval = setInterval(generateBalls, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-16 md:h-20 overflow-hidden">
      {balls.map((ball) => (
        <div
          key={`${ball.id}-${ball.number}`}
          className="absolute"
          style={{
            left: `${ball.startX}%`,
            animation: `lottoBallFloat ${ball.duration}s ease-in-out ${ball.delay}s infinite`,
          }}
        >
          <div
            className={`bg-gradient-to-br ${ball.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 relative overflow-hidden`}
            style={{ width: ball.size, height: ball.size }}
          >
            {/* Shine effect */}
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-white/30 rounded-full blur-[2px]" />
            <span className="text-white font-extrabold text-xs md:text-sm relative z-10 drop-shadow-md">
              {ball.number}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LottoBalls;
