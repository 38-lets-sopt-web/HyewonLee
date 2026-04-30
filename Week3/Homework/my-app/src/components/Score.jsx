import styled from "@emotion/styled";
import { font } from "../styles/tokens";

export default function Score({ score }) {
  return (
    <section>
      <p>총 점수</p>
      <ScoreValue>{score}</ScoreValue>
    </section>
  );
}

const ScoreValue = styled.p`
  font-size: 2rem;
  font-weight: ${font.bold};
`;
