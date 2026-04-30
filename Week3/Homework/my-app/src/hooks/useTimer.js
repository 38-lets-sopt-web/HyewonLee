// 타이머
import { LEVEL } from "../constants/config";
import { useEffect, useState } from "react";

export function useTimer(isPlaying, setIsPlaying, level, setLevel) {
  const [timeLeft, setTimeLeft] = useState(() => LEVEL["Lv1"].time);

  // 레벨 바뀌면 타이머 리셋
  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setTimeLeft(LEVEL[newLevel].time);
  };

  // 타이머(0.1초마다 감소)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          setIsPlaying(false);
          return 0;
        }
        return Math.round((prev - 0.1) * 10) / 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPlaying, setIsPlaying]);

  return { timeLeft, setTimeLeft, level, handleLevelChange };
}
