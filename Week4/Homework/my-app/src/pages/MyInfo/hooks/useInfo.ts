import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "@/shared/hooks/useForm";

export function useInfo() {
  const [id, setId] = useState("");
  const [part, setPart] = useState("");

  const { formValues, setFormValues, handleChange } = useForm({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
        setId(data.data.loginId);
        setPart(data.data.part);
        setFormValues({
          name: data.data.name,
          email: data.data.email,
          age: String(data.data.age),
        });
      } catch {
        console.error("유저 정보를 불러오지 못했습니다.");
      }
    };

    fetchUser();
  }, [setFormValues]);

  const handleUpdate = async () => {
    const userId = localStorage.getItem("userId");
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
        name: formValues.name,
        email: formValues.email,
        age: Number(formValues.age),
      });
      alert("수정이 완료되었습니다.");
    } catch {
      alert("수정에 실패했습니다.");
    }
  };

  return { id, part, formValues, handleChange, handleUpdate };
}
