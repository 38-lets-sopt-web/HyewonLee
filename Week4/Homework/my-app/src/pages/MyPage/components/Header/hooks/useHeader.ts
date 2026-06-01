import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function useHeader() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
        setName(data.data.name);
      } catch {
        console.error("유저 정보를 불러오지 못했습니다.");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return { name, handleLogout };
}
