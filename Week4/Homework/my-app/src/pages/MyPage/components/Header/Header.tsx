import { useHeader } from "./hooks/useHeader";
import { NavLink } from "react-router";
import * as styles from "./Header.css";

export function Header() {
  const { name, handleLogout } = useHeader();

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.title}>SOPT MEMBERS</div>
        <div>안녕하세요 {name}님</div>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/mypage/myinfo"
          className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
        >
          내 정보
        </NavLink>
        <NavLink
          to="/mypage/members"
          className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
        >
          회원조회
        </NavLink>
        <div className={styles.navItem} onClick={handleLogout}>
          로그아웃
        </div>
      </nav>
    </header>
  );
}

export default Header;
