// 게임 상태 관리
import { useState } from "react";

export function useGameState() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState("Lv1");
  const [message, setMessage] = useState("");

  return { isPlaying, setIsPlaying, level, setLevel, message, setMessage };
}
