import styled from "@emotion/styled";
import { font, color } from "../styles/tokens";

export default function Result({ successCount, failCount }) {
  return (
    <ResultWrapper>
      <ResultCard>
        <SuccessLabel>성공</SuccessLabel>
        <ResultValue>{successCount}</ResultValue>
      </ResultCard>
      <ResultCard>
        <FailLabel>실패</FailLabel>
        <ResultValue>{failCount}</ResultValue>
      </ResultCard>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ResultCard = styled.section`
  width: 7rem;
  height: 8rem;
`;

const SuccessLabel = styled.p`
  color: ${color.green};
  font-weight: ${font.bold};
`;

const FailLabel = styled.p`
  color: ${color.red};
  font-weight: ${font.bold};
`;

const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: ${font.bold};
`;
