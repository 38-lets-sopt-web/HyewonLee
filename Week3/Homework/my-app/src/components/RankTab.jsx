import styled from "@emotion/styled";
import { font, color } from "../styles/tokens";

export default function RankTab() {
  return (
    <RankTabWrapper>
      <RankBoard>
        {/* Ranking 헤더 */}
        <RankHeader>
          <h2>랭킹 보드</h2>
          <ResetBtn>기록 초기화</ResetBtn>
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
          <tbody>{/* 데이터 불러오기 */}</tbody>
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
  th {
    padding: 0.5rem;
    font-size: ${font.small};
  }
`;
