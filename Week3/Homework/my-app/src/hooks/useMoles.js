// 두더지/폭탄 생성
import { useState, useEffect } from "react";
import { LEVEL } from "../constants/config";

export function useMoles(isPlaying, level, setScore, setSuccessCount, setFailCount, setMessage) {
  const [activeCells, setActiveCells] = useState([]);

  const { grid } = LEVEL[level];
  const cellCount = grid * grid;

  // 두더지/폭탄 1초마다 등장
  useEffect(() => {
    if (!isPlaying) return;

    const showMole = setInterval(() => {
      // 랜덤 위치 선정
      const random = Math.floor(Math.random() * cellCount);
      // 60% 두더지/40% 폭탄
      const type = Math.random() < 0.6 ? "mole" : "bomb";

      // {위치, 타입} 객체
      setActiveCells((prev) => [...prev, { index: random, type }]);

      // 1.5초동안 해당 index를 가진 cell 보임
      setTimeout(() => {
        setActiveCells((prev) => prev.filter((cell) => cell.index !== random));
      }, 1500);
    }, 1000);

    return () => clearInterval(showMole);
  }, [isPlaying, cellCount]);

  // 두더지 클릭
  const handleMoleClick = (index) => {
    setScore((prev) => prev + 1);
    setSuccessCount((prev) => prev + 1);
    setMessage("잡았다 너!");

    setActiveCells((prev) =>
      prev.map((cell) => (cell.index === index ? { ...cell, type: "mole-hit" } : cell)),
    );

    // 0.7초동안 hitImg로 보임
    setTimeout(() => {
      setActiveCells((prev) => prev.filter((cell) => cell.index !== index));
    }, 700);

    //  0.7초동안 message 보임
    setTimeout(() => {
      setMessage("");
    }, 700);
  };

  // 폭탄 클릭
  const handleBombClick = (index) => {
    setScore((prev) => prev - 1);
    setFailCount((prev) => prev + 1);
    setMessage("땡!!!");

    setActiveCells((prev) => prev.filter((cell) => cell.index !== index));

    setTimeout(() => {
      setMessage("");
    }, 700);
  };

  return { activeCells, setActiveCells, handleMoleClick, handleBombClick };
}
