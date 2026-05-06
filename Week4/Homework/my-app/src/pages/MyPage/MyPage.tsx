import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { main } from "./MyPage.css";

export function MyPage() {
  return (
    <>
      <Header />
      <main className={main}>
        <Outlet />
      </main>
    </>
  );
}
