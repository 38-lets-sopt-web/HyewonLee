import styled from "@emotion/styled";
import { useState } from "react";
import Score from "./Score";
import Time from "./Time";
import Result from "./Result";
import InfoMessage from "./InfoMessage";
import GameBoard from "./GameBoard";

export default function GameTab() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState("Lv1");

  return (
    <GameTabWrapper>
      <GameTabCol>
        <Time />
        <Score />
        <Result />
        <InfoMessage />
      </GameTabCol>
      <GameBoard
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        level={level}
        setLevel={setLevel}
      />
    </GameTabWrapper>
  );
}

const GameTabWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 2rem;
`;

const GameTabCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
