import * as styles from "./Header.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.title}>SOPT MEMBERS</div>
        <div>이것은 4주차 과제</div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navItem}>내 정보</div>
        <div className={styles.navItem}>회원조회</div>
        <div className={styles.navItem}>로그아웃</div>
      </nav>
    </header>
  );
};

export default Header;
