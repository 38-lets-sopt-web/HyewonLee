import { Input } from "@/shared/components/Input/Input";
import { useLogin } from "./hooks/useLogin";
import { LOGIN_FIELDS } from "@/shared/constants/InputFields";
import { inputCol, button, activeButton } from "@/shared/components/Input/Input.css";
import { login, main } from "./Login.css";

export function Login() {
  const { formValues, handleChange, onSubmit, isValid } = useLogin();

  return (
    <main className={main}>
      <form className={login} onSubmit={onSubmit}>
        <h1>SOPT MEMBERS</h1>
        <div className={inputCol}>
          {LOGIN_FIELDS.map((field) => (
            <Input
              key={field.key}
              name={field.key}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.key]}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className={isValid ? activeButton : button} type="submit">
          로그인
        </button>
        <a href="/signup">회원가입</a>
      </form>
    </main>
  );
}
