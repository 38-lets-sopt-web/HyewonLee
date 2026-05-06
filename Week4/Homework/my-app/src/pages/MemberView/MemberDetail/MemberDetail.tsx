import { pclass } from "@/pages/SignUp/SignUp.css";
import { useNavigate } from "react-router";
import { InfoItem } from "@/shared/components/InfoItem/InfoItem";
import { useMemberDetail } from "./hooks/useMemberDetail";
import { searchBox } from "../MemberView.css";
import { main } from "../MemberView.css";

export function MemberDetail() {
  const { member } = useMemberDetail();
  const navigate = useNavigate();

  return (
    <div className={main}>
      <button className={pclass} type="button" onClick={() => navigate(-1)}>
        ← 뒤로가기
      </button>
      <h1>상세 정보</h1>
      <div className={searchBox}>
        {member && (
          <dl>
            {[
              { label: "아이디", value: member.loginId },
              { label: "이름", value: member.name },
              { label: "이메일", value: member.email },
              { label: "나이", value: member.age },
              { label: "파트", value: member.part },
            ].map(({ label, value }) => (
              <InfoItem key={label} label={label} value={value} />
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
