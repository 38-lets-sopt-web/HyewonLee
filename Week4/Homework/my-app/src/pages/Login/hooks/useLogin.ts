import { useForm } from "@/shared/hooks/useForm";
import { useNavigate } from "react-router";
import axios from "axios";

export function useLogin() {
  const navigate = useNavigate();
  const { formValues, handleChange, handleSubmit, isValid } = useForm({
    loginId: "",
    password: "",
  });

  const onSubmit = handleSubmit(async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`, formValues);
      localStorage.setItem("loginId", data.loginId);
      navigate("/mypage");
    } catch {
      alert("로그인에 실패했습니다.");
    }
  });

  return { formValues, handleChange, onSubmit, isValid };
}
