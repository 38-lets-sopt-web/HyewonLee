import { useEffect, useState } from "react";
import axios from "axios";

export interface Member {
  id: number;
  name: string;
  part: string;
}

export function useMemberList() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setMembers(data.data.users);
      } catch {
        alert("멤버 목록을 불러오지 못했습니다.");
      }
    };

    fetchMembers();
  }, []);

  return { members };
}
