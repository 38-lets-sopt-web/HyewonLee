import styled from "@emotion/styled";
import { font } from "../styles/tokens";

export default function Time() {
  return (
    <section>
      <p>남은 시간</p>
      <TimeValue>30</TimeValue>
    </section>
  );
}

const TimeValue = styled.p`
  font-size: 2rem;
  font-weight: ${font.bold};
`;
