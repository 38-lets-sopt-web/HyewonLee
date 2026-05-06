import { inputWrapper } from "./Input.css";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ label, name, type = "text", placeholder, value, onChange }: InputProps) {
  return (
    <div className={inputWrapper}>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
