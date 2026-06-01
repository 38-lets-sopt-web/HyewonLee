import styled from "@emotion/styled";
import { font, color } from "../styles/tokens";
import { useState } from "react";
import { getSortedRank } from "../utils/rank";
import { clearScores } from "../utils/storage";

export default function RankTab() {
  const [scores, setScores] = useState(getSortedRank());

  // 기록 초기화
  const handleReset = () => {
    if (window.confirm("기록을 초기화하시겠습니까?")) {
      clearScores();
      // 빈 배열로 만들고 리렌더링
      setScores([]);
    }
  };
  return (
    <RankTabWrapper>
      <RankBoard>
        {/* Ranking 헤더 */}
        <RankHeader>
          <h2>랭킹 보드</h2>
          <ResetBtn onClick={handleReset}>기록 초기화</ResetBtn>
        </RankHeader>
        {/* Ranking 표 */}
        <RankTable>
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>점수</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {scores.length === 0 ? (
              <tr>
                <td colSpan={4}>기록이 없습니다</td>
              </tr>
            ) : (
              scores.map((record, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{record.level}</td>
                  <td>{record.score}</td>
                  <td>{new Date(record.timestamp).toLocaleString("ko-KR")}</td>
                </tr>
              ))
            )}
          </tbody>
        </RankTable>
      </RankBoard>
    </RankTabWrapper>
  );
}

const RankTabWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
`;

const RankBoard = styled.section`
  width: 100%;
  height: 35rem;
  padding: 1rem 2rem;
  justify-content: unset;
  gap: 1rem;
`;

const RankHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ResetBtn = styled.button`
  background-color: ${color.red};
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 1rem;
`;

const RankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    background-color: ${color.bg};
  }
  th,
  td {
    padding: 0.5rem;
    font-size: ${font.small};
    text-align: center;
  }
`;
