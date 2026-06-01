import { useState } from "react";
import axios from "axios";

interface UserResult {
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export function useMember() {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<UserResult | null>(null);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/${searchId}`);
      setResult(data.data);
    } catch {
      alert("해당 회원을 찾을 수 없습니다.");
      setResult(null);
    }
  };

  return { searchId, setSearchId, result, handleSearch };
}
