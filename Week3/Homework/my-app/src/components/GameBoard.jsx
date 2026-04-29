// GameBoard: 게임판 UI
import styled from "@emotion/styled";
import { color, font } from "../styles/tokens";
import { LEVEL } from "../constants/config";
import moleImg from "../assets/mole.jpg";
import bombImg from "../assets/bomb.jpg";

export default function GameBoard({
  isPlaying,
  setIsPlaying,
  level,
  setLevel,
  activeIndex,
  cellType,
  handleMoleClick,
}) {
  // 레벨에 맞는 grid 크기
  const { grid } = LEVEL[level];
  // grid*grid 크기의 빈 배열 생성
  const cells = Array(grid * grid).fill(null);

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
      <GridWrapper grid={grid}>
        {cells.map((_, i) => (
          // 두더지가 있으면 클릭 가능
          <Cell key={i} onClick={i === activeIndex ? handleMoleClick : undefined}>
            {/* 두더지 보여주기 */}
            {i === activeIndex &&
              isPlaying &&
              (cellType === "mole" ? (
                <Mole src={moleImg} alt="두더지" />
              ) : (
                <Bomb src={bombImg} alt="폭탄" />
              ))}
          </Cell>
        ))}
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

const Mole = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
const Bomb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
