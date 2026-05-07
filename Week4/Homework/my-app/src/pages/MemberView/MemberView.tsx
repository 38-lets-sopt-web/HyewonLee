import { main, members, ptext, searchBox } from "./MemberView.css";
import { Input } from "@/shared/components/Input/Input";
import { button, activeButton } from "@/shared/components/Input/Input.css";
import { InfoItem } from "@/shared/components/InfoItem/InfoItem";
import { useMember } from "./hooks/useMember";
import { MemberList } from "./components/MemberList/MemberList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function MemberView() {
  const { searchId, setSearchId, result, handleSearch } = useMember();

  return (
    <>
      <div className={main}>
        <h1>회원 조회</h1>
        <Input
          name="search"
          label="회원 ID"
          placeholder="ID를 입력하세요"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button className={searchId ? activeButton : button} type="button" onClick={handleSearch}>
          검색
        </button>
        <p className={ptext}>검색 결과</p>
        <dl className={searchBox}>
          {result ? (
            <>
              {[
                { label: "아이디", value: result.loginId },
                { label: "이름", value: result.name },
                { label: "이메일", value: result.email },
                { label: "나이", value: result.age },
                { label: "파트", value: result.part },
              ].map(({ label, value }) => (
                <InfoItem key={label} label={label} value={value} />
              ))}
            </>
          ) : (
            "원하는 ID를 검색해보세요!"
          )}
        </dl>
      </div>

      <div className={members}>
        <ErrorBoundary fallback={<div>멤버를 불러오지 못했습니다.</div>}>
          <Suspense fallback={<div>멤버 불러오는 중...</div>}>
            <MemberList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
