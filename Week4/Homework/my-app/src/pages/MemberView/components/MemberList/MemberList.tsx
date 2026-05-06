import { MemberCard } from "../MemberCard/MemberCard";
import { ptext } from "../../MemberView.css";
import { useMemberList } from "../../hooks/useMemberList";
import { cardList } from "./MemberList.css";

export function MemberList() {
  const { members } = useMemberList();

  return (
    <div>
      <div className={ptext}>전체 멤버 리스트</div>
      <div className={cardList}>
        {members.map((member) => (
          <MemberCard key={member.id} id={member.id} name={member.name} part={member.part} />
        ))}
      </div>
    </div>
  );
}
