import { Input } from "@/shared/components/Input";
import { useLogin } from "./hooks/useLogin";
import { inputCol, button } from "@/shared/components/Input/Input.css";
import { login, main } from "./Login.css";

export function Login() {
  const { id, setId, password, setPassword, handleLogin } = useLogin();
  return (
    <main className={main}>
      <div className={login}>
        <h1>SOPT MEMBERS</h1>
        <div className={inputCol}>
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={button} onClick={handleLogin}>
          로그인
        </button>
        <a href="/signup">회원가입</a>
      </div>
    </main>
  );
}
