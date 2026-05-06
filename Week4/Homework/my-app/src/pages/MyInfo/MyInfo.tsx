import { pclass } from "../SignUp/SignUp.css";
import { useInfo } from "./hooks/useInfo";
import { main, infoBox, infoItem } from "./MyInfo.css";
import { INFO_FIELDS } from "@/shared/constants/InputFields";
import { Input } from "@/shared/components/Input/Input";
import { activeButton } from "@/shared/components/Input/Input.css";

export function MyInfo() {
  const { id, part, formValues, handleChange, handleUpdate } = useInfo();

  return (
    <div className={main}>
      <h1>내 정보</h1>
      <dl className={infoBox}>
        <div className={infoItem}>
          <dt>아이디</dt>
          <dd className={pclass}>{id}</dd>
        </div>
        <div className={infoItem}>
          <dt>파트</dt>
          <dd className={pclass}>{part}</dd>
        </div>
      </dl>

      {INFO_FIELDS.map((field) => (
        <Input
          key={field.key}
          name={field.key}
          label={field.label}
          type={field.type}
          value={formValues[field.key]}
          onChange={handleChange}
        />
      ))}
      <button className={activeButton} type="submit" onClick={handleUpdate}>
        정보 수정
      </button>
    </div>
  );
}
