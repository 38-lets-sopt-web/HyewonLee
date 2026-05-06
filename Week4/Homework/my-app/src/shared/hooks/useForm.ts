import { useState, type ChangeEvent, type BaseSyntheticEvent } from "react";

export function useForm<T extends Record<string, string>>(initialValues: T) {
  const [formValues, setFormValues] = useState<T>(initialValues);
  const isValid = Object.values(formValues).every((value) => value.trim() !== "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (onSubmit: () => void | Promise<void>) => (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return { formValues, handleChange, handleSubmit, isValid };
}
