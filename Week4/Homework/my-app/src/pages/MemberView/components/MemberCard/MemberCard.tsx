import { useNavigate } from "react-router";
import { card, nameStyle, partStyle } from "./MemberCard.css";

interface MemberCardProps {
  id: number;
  name: string;
  part: string;
}

export function MemberCard({ id, name, part }: MemberCardProps) {
  const navigate = useNavigate();

  return (
    <div className={card} onClick={() => navigate(`/mypage/members/${id}`)}>
      <div className={nameStyle}>{name}</div>
      <div className={partStyle}>{part}</div>
    </div>
  );
}
