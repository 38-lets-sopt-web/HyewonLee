// GameBoard: 게임판 UI
import styled from "@emotion/styled";
import { color, font } from "../styles/tokens";
import { LEVEL } from "../constants/config";
import moleImg from "../assets/mole.jpg";
import moleHitImg from "../assets/mole-hit.jpg";
import bombImg from "../assets/bomb.jpg";
import { useState } from "react";

export default function GameBoard({
  isPlaying,
  setIsPlaying,
  level,
  handleLevelChange,
  activeCells,
  handleMoleClick,
  handleBombClick,
  resetGame,
}) {
  // 레벨에 맞는 grid 크기
  const { grid } = LEVEL[level];
  // grid*grid 크기의 빈 배열 생성
  const cells = Array(grid * grid).fill(null);

  return (
    <GameBoardWrapper>
      {/* Game 헤더 */}
      <GameHeader>
        <Level
          value={level}
          onChange={(e) => handleLevelChange(e.target.value)}
          disabled={isPlaying}
        >
          <option value="Lv1">Level 1</option>
          <option value="Lv2">Level 2</option>
          <option value="Lv3">Level 3</option>
        </Level>
        <BtnRow>
          <GameBtn isPlaying={false} isActive={!isPlaying} onClick={() => setIsPlaying(true)}>
            시작
          </GameBtn>
          <GameBtn
            isPlaying={true}
            isActive={isPlaying}
            onClick={() => {
              setIsPlaying(false);
              resetGame();
            }}
          >
            중단
          </GameBtn>
        </BtnRow>
      </GameHeader>
      {/* Game 공간 */}
      <GridWrapper grid={grid}>
        {cells.map((_, i) => {
          // find 사용해서 배열에서 해당 index 찾기
          const activeCell = activeCells.find((cell) => cell.index === i);

          return (
            <Cell
              key={i}
              onClick={
                // type에 따라 다른 함수
                activeCell?.type === "bomb"
                  ? () => handleBombClick(i)
                  : activeCell?.type === "mole"
                    ? () => handleMoleClick(i)
                    : undefined
              }
            >
              {activeCell && isPlaying && (
                // type에 따라 다른 이미지
                <Character
                  src={
                    activeCell.type === "mole"
                      ? moleImg
                      : activeCell.type === "mole-hit"
                        ? moleHitImg
                        : bombImg
                  }
                  alt={activeCell.type}
                />
              )}
            </Cell>
          );
        })}
      </GridWrapper>
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
  background-color: ${({ isPlaying }) => (isPlaying ? color.red : color.green)};
  color: white;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  border-radius: 1rem;
`;

const GridWrapper = styled.div`
  display: grid;
  // grid만큼의 열 만들어서 배치
  grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
  gap: 1rem;
  width: 40rem;
  height: 30rem;
  background-color: ${color.bg};
  border-radius: 1rem;
  padding: 1rem;
  justify-items: center;
`;

const Cell = styled.div`
  background-color: ${color.lightbrown};
  border-radius: 50%;
  aspect-ratio: 1;
  width: 70%;
  /* 이미지 아래 공백 생기지 않도록 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Character = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
