import styled from "@emotion/styled";
import { color, font } from "../styles/tokens";

export default function GameBoard({ isPlaying, setIsPlaying, level, setLevel }) {
  return (
    <GameBoardWrapper>
      {/* Game 헤더 */}
      <GameHeader>
        <Level value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Lv1">Level 1</option>
          <option value="Lv2">Level 2</option>
          <option value="Lv3">Level 3</option>
        </Level>
        <BtnRow>
          <GameBtn isPlaying={false} isActive={!isPlaying} onClick={() => setIsPlaying(true)}>
            시작
          </GameBtn>
          <GameBtn isPlaying={true} isActive={isPlaying} onClick={() => setIsPlaying(false)}>
            중단
          </GameBtn>
        </BtnRow>
      </GameHeader>
      {/* Game 공간 */}
      <GameGrid></GameGrid>
    </GameBoardWrapper>
  );
}

const GameBoardWrapper = styled.section`
  width: 70rem;
  height: 35rem;
`;

const GameHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Level = styled.select`
  width: 5rem;
  height: 2.5rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${color.bg};
  color: white;
  font-weight: ${font.bold};
  cursor: pointer;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GameBtn = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${({ isPlaying }) => (isPlaying ? color.red : color.blue)};
  color: white;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  border-radius: 1rem;
`;

const GameGrid = styled.div`
  width: 40rem;
  height: 30rem;
  background-color: ${color.bg};
  border-radius: 1rem;
`;
