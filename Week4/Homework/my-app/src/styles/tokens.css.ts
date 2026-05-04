const rem = (px: number) => `${px / 16}rem`;

export const tokens = {
  color: {
    white: "#ffffff",
    black: "#000000",

    blue100: "#e6f9fc",
    blue200: "#bdecfc",
    blue400: "#00BDFF",
    blue600: "#028ebf",
    blue700: "#016991",

    gray300: "#d1d5db",
    gray500: "#9ca3af",
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
