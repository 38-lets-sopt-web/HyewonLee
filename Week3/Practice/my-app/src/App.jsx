import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

import { members } from "./member";
import { useSearch } from "./hooks/useSearch";

function App() {
  // 커스텀 훅 사용
  const { search, filteredData, handleSearchChange, handleSearchClick } = useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* map 함수 사용 */}
        {filteredData.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            github={member.github}
            englishName={member.englishName}
          />
        ))}
      </section>
    </>
  );
}

export default App;
