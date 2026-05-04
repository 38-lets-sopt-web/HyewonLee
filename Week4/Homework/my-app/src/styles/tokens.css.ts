const rem = (px: number) => `${px / 16}rem`;

export const tokens = {
  color: {
    white: "#ffffff",
    black: "#000000",

    blue400: "#00BDFF",
    blue200: "#bdecfc",

    gray100: "#e6e9eb",
    gray300: "#d1d5db",
    gray500: "#9ca3af",
    gray800: "#363f45",
  },
  fontSize: {
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
  },
  fontWeight: {
    semibold: "600",
    bold: "700",
  },
  spacing: {
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
  },
  borderRadius: {
    sm: rem(4),
    md: rem(8),
    full: "9999px",
  },
} as const;
