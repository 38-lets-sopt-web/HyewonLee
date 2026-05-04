import { useState } from "react";

export function useLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 로그인 로직
  };

  return { id, setId, password, setPassword, handleLogin };
}
