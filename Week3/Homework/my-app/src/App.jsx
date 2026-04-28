import { Global, css } from "@emotion/react";
import { font, color } from "./styles/tokens";
import Header from "./components/Header";
import { useState } from "react";
import GamePage from "./components/GamePage";
import RankPage from "./components/RankPage";

function App() {
  const [activeTab, setActiveTab] = useState("game");
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0.5rem 1rem;
            box-sizing: border-box;
          }
          body {
            font-family: ${font.primary};
            font-weight: ${font.regular};
            font-size: ${font.baseSize};
            background-color: ${color.bg};
            color: white;
          }
          button {
            border: none;
            outline: none;
            appearance: none;
            padding: 0.5rem;
            cursor: pointer;
            font: inherit;
          }
        `}
      />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "game" ? <GamePage /> : <RankPage />}
    </>
  );
}

export default App;
