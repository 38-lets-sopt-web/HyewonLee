import { createGlobalTheme } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

export const vars = createGlobalTheme(":root", {
  color: {
    pageBg: tokens.color.blue100,
    partBg: tokens.color.blue100,
    btnBg: tokens.color.blue200,
    btnActiveBg: tokens.color.blue400,
    btnHoverBg: tokens.color.blue600,
    textPrimary: tokens.color.blue700,
    textSub: tokens.color.gray300,
    textPlaceholder: tokens.color.gray500,
    textAccent: tokens.color.blue400,
    headerBg: tokens.color.blue700,
    border: tokens.color.gray300,
    borderFocus: tokens.color.blue700,
    white: tokens.color.white,
    black: tokens.color.black,
  },
  font: {
    family: "'Noto Sans KR', sans-serif",
  },
  fontSize: {
    sm: tokens.fontSize.sm,
    md: tokens.fontSize.md,
    lg: tokens.fontSize.lg,
  },
  fontWeight: {
    sb: tokens.fontWeight.semibold,
    bold: tokens.fontWeight.bold,
  },
  spacing: {
    sm: tokens.spacing.sm,
    md: tokens.spacing.md,
    lg: tokens.spacing.lg,
  },
  borderRadius: {
    sm: tokens.borderRadius.sm,
    md: tokens.borderRadius.md,
    full: tokens.borderRadius.full,
  },
});
