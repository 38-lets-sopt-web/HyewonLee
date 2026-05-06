import { searchItem } from "./InfoItem.css";
import { pclass } from "@/pages/SignUp/SignUp.css";

interface InfoItemProps {
  label: string;
  value: string | number;
}

export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className={searchItem}>
      <dt>{label}</dt>
      <dd className={pclass}>{value}</dd>
    </div>
  );
}
