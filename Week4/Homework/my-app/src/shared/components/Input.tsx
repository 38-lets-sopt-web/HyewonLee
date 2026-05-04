import { inputWrapper } from "./Input/Input.css";

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ label, type = "text", placeholder, value, onChange }: InputProps) {
  return (
    <div className={inputWrapper}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
