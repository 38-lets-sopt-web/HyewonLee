import { useForm } from "@/shared/hooks/useForm";
import { useNavigate } from "react-router";
import axios from "axios";

export function useSignup() {
  const navigate = useNavigate();
  const { formValues, handleChange, handleSubmit, isValid } = useForm({
    loginId: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    age: "",
    part: "",
  });

  const onSubmit = handleSubmit(async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        loginId: formValues.loginId,
        password: formValues.password,
        name: formValues.name,
        email: formValues.email,
        age: Number(formValues.age),
        part: formValues.part,
      });
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch {
      alert("회원가입에 실패했습니다.");
    }
  });

  return { formValues, handleChange, onSubmit, isValid };
}
