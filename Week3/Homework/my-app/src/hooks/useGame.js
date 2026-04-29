// useGame.js: 게임 로직
import { useState } from "react";
import { LEVEL } from "../constants/config";
import { useEffect } from "react";

export function useGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState("Lv1");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null); // 두더지와 폭탄의 위치
  const [cellType, setCellType] = useState(null); // 'mole' | 'bomb' 구분

  const { grid } = LEVEL[level];
  const cellCount = grid * grid;

  // isPlaying이면 1초마다 랜덤 위치에 두더지 출현
  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    // 간격 1초
    const interval = setInterval(() => {
      // 랜덤 칸 번호
      const random = Math.floor(Math.random() * cellCount);
      // 70% 두더지, 30% 폭탄
      const type = Math.random() < 0.7 ? "mole" : "bomb";
      // 뽑힌 칸 번호 저장
      setActiveIndex(random);
      // 뽑힌 타입 저장
      setCellType(type);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, cellCount]);

  // 두더지 클릭
  const handleMoleClick = () => {
    setScore((prev) => prev + 1);
    setSuccessCount((prev) => prev + 1);
    setActiveIndex(null);
  };

  // 폭탄 클릭
  const handleBombClick = () => {
    setScore((prev) => prev - 1);
    setFailCount((prev) => prev + 1);
  };

  return {
    isPlaying,
    setIsPlaying,
    level,
    setLevel,
    score,
    setScore,
    timeLeft,
    setTimeLeft,
    successCount,
    setSuccessCount,
    failCount,
    setFailCount,
    activeIndex,
    cellType,
    handleMoleClick,
    handleBombClick,
  };
}
