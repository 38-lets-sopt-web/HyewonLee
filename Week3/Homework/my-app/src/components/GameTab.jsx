// GameTab: props 전달
import styled from "@emotion/styled";
import { useGame } from "../hooks/useGame";
import Score from "./Score";
import Time from "./Time";
import Result from "./Result";
import InfoMessage from "./InfoMessage";
import GameBoard from "./GameBoard";

export default function GameTab() {
  const game = useGame();

  return (
    <GameTabWrapper>
      <GameTabCol>
        <Time timeLeft={game.timeLeft} setTimeLeft={game.setTimeLeft} />
        <Score score={game.score} setScore={game.setScore} />
        <Result
          successCount={game.successCount}
          setSuccessCount={game.setSuccessCount}
          failCount={game.failCount}
          setFailCount={game.setFailCount}
        />
        <InfoMessage message={game.message} />
      </GameTabCol>
      <GameBoard {...game} />
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
