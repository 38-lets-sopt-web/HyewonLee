import { Global, css } from "@emotion/react";
import { font, color } from "./styles/tokens";
import Header from "./components/Header";
import { useState } from "react";
import GameTab from "./components/GameTab";
import RankTab from "./components/RankTab";
import styled from "@emotion/styled";

function App() {
  const [activeTab, setActiveTab] = useState("game");
  return (
    <>
      {/* Global */}
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          /* 기본 스타일 */
          body {
            font-family: ${font.primary};
            font-weight: ${font.regular};
            font-size: ${font.baseSize};
            background-color: ${color.bg};
            color: white;
            overflow: hidden;
          }
          /* 버튼 기본 스타일 */
          button {
            border: none;
            outline: none;
            appearance: none;
            padding: 0.5rem;
            cursor: pointer;
            font: inherit;
            font-weight: ${font.bold};
            font-size: ${font.small};
          }
          /* 공통 카드 스타일 */
          section {
            display: flex;
            flex-direction: column;
            width: 15rem;
            height: 8rem;
            background-color: ${color.lightbrown};
            border-radius: 1rem;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            text-align: center;
          }
        `}
      />
      <AppWrapper>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "game" ? <GameTab /> : <RankTab />}
      </AppWrapper>
    </>
  );
}

// 전체 패딩
const AppWrapper = styled.div`
  padding: 1rem 6rem;
`;

export default App;
