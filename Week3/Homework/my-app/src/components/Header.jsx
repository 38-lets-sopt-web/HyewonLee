import styled from "@emotion/styled";
import { font, color } from "../styles/tokens";

export default function Header({ activeTab, setActiveTab }) {
  return (
    <HeaderWrapper>
      <Title>두더지 게임</Title>
      <>
        <TabButton isActive={activeTab === "game"} onClick={() => setActiveTab("game")}>
          게임
        </TabButton>
        <TabButton isActive={activeTab === "rank"} onClick={() => setActiveTab("rank")}>
          랭킹
        </TabButton>
      </>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: ${color.lightbrown};
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  gap: 0.5rem;
`;

const Title = styled.h2``;

const TabButton = styled.button`
  border: 2px solid ${color.green};
  background-color: ${({ isActive }) => (isActive ? color.green : "white")};
  border-radius: 1rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "white" : color.green)};
  font-weight: ${font.medium};
  font-size: ${font.small};
`;
