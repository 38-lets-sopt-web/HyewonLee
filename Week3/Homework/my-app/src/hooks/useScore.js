import { useState, useEffect, useRef } from "react";

export function useScore() {
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const scoreRef = useRef(score);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  // score 초기화
  const resetScore = () => {
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
  };

  return {
    score,
    setScore,
    successCount,
    setSuccessCount,
    failCount,
    setFailCount,
    scoreRef,
    resetScore,
  };
}
