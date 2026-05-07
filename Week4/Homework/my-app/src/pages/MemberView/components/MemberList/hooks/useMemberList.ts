import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Member {
  id: number;
  name: string;
  part: string;
}

export function useMemberList() {
  const { data: members } = useSuspenseQuery<Member[]>({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return data.data.users;
    },
  });

  return { members };
}
