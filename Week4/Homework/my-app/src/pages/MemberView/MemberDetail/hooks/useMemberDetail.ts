import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

interface MemberDetail {
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export function useMemberDetail() {
  const { id } = useParams();
  const [member, setMember] = useState<MemberDetail | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`);
        setMember(data.data);
      } catch {
        alert("해당 회원을 찾을 수 없습니다.");
      }
    };

    fetchMember();
  }, [id]);

  return { member };
}
