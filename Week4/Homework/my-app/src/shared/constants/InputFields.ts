export const LOGIN_FIELDS = [
  {
    key: "loginId",
    label: "아이디",
    placeholder: "아이디를 입력해주세요.",
    type: "text",
  },
  {
    key: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
    type: "password",
  },
] as const;

export const SIGNUP_FIELDS = [
  {
    key: "loginId",
    label: "아이디",
    placeholder: "아이디를 입력해주세요.",
    type: "text",
  },
  {
    key: "password",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
    type: "password",
  },
  {
    key: "passwordConfirm",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 한 번 더 입력해주세요.",
    type: "password",
  },
  {
    key: "name",
    label: "이름",
    placeholder: "이름을 입력해주세요.",
    type: "text",
  },
  {
    key: "email",
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    type: "email",
  },
  {
    key: "age",
    label: "나이",
    placeholder: "나이를 입력해주세요.",
    type: "number",
  },
  {
    key: "part",
    label: "파트",
    placeholder: "파트명을 입력해주세요.",
    type: "text",
  },
] as const;

export const INFO_FIELDS = [
  {
    key: "name",
    label: "이름",
    placeholder: "이름을 입력해주세요.",
    type: "text",
  },
  {
    key: "email",
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    type: "email",
  },
  {
    key: "age",
    label: "나이",
    placeholder: "나이를 입력해주세요.",
    type: "number",
  },
] as const;
