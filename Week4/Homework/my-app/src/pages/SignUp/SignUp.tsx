import { Input } from "@/shared/components/Input/Input";
import { useSignup } from "./hooks/useSignUp";
import { SIGNUP_FIELDS } from "@/shared/constants/InputFields";
import { inputCol, button, activeButton } from "@/shared/components/Input/Input.css";
import { signup, main, pclass } from "./SignUp.css";
import { Link } from "react-router";

export function SignUp() {
  const { formValues, handleChange, onSubmit, isValid } = useSignup();

  return (
    <main className={main}>
      <form className={signup} onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <div className={inputCol}>
          {SIGNUP_FIELDS.map((field) => (
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
          회원가입
        </button>
        <p className={pclass}>
          이미 계정이 있나요?&nbsp;
          <Link to="/login">로그인으로 돌아가기</Link>
        </p>
      </form>
    </main>
  );
}
