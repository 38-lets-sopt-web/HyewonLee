import { useForm } from "@/shared/hooks/useForm";

export function useSignup() {
  const { formValues, handleChange, handleSubmit } = useForm({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    age: "",
    part: "",
  });

  const onSubmit = handleSubmit(() => {
    // 회원가입 API 호출
  });

  return { formValues, handleChange, onSubmit };
}
