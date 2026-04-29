import styled from "@emotion/styled";
import { font } from "../styles/tokens";

export default function Time({ timeLeft }) {
  return (
    <section>
      <p>남은 시간</p>
      <TimeValue>{timeLeft}</TimeValue>
    </section>
  );
}

const TimeValue = styled.p`
  font-size: 2rem;
  font-weight: ${font.bold};
`;
