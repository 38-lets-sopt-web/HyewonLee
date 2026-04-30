// hook들 조합해서 component로 전달
import { useEffect, useCallback } from "react";
import { LEVEL } from "../constants/config";
import { useGameState } from "./useGameState";
import { useScore } from "./useScore";
import { useTimer } from "./useTimer";
import { useMoles } from "./useMoles";
import { saveScore } from "../utils/storage";

export function useGame() {
  const { isPlaying, setIsPlaying, level, setLevel, message, setMessage } = useGameState();
  const {
    score,
    setScore,
    successCount,
    setSuccessCount,
    failCount,
    setFailCount,
    scoreRef,
    resetScore,
  } = useScore();
  const { timeLeft, setTimeLeft, handleLevelChange } = useTimer(
    isPlaying,
    setIsPlaying,
    level,
    setLevel,
  );
  const { activeCells, setActiveCells, handleMoleClick, handleBombClick } = useMoles(
    isPlaying,
    level,
    setScore,
    setSuccessCount,
    setFailCount,
    setMessage,
  );

  // 초기화
  const resetGame = useCallback(() => {
    resetScore();
    setTimeLeft(LEVEL[level].time);
    setActiveCells([]);
  }, [level, resetScore, setTimeLeft, setActiveCells]);

  // timeLeft가 0이 되면 게임 종료
  useEffect(() => {
    if (timeLeft === 0 && !isPlaying) {
      // 게임 결과 저장 함수 호출
      saveScore(level, scoreRef.current);
      // 게임 종료 alert 띄우기
      alert(`게임 종료!\n레벨: ${level}\n최종 점수: ${scoreRef.current}`);
      // 초기화
      resetGame();
    }
  }, [timeLeft, isPlaying, level, resetGame, scoreRef]);

  return {
    isPlaying,
    setIsPlaying,
    level,
    setLevel,
    score,
    timeLeft,
    successCount,
    failCount,
    activeCells,
    message,
    handleLevelChange,
    handleMoleClick,
    handleBombClick,
    resetGame,
  };
}
