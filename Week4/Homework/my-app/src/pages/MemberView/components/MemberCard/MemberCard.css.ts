import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  width: "200px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.white,
  borderRadius: vars.borderRadius.md,
  color: vars.color.textPrimary,
  padding: vars.spacing.lg,
  gap: vars.spacing.md,
});

export const nameStyle = style({
  fontWeight: vars.fontWeight.bold,
});

export const partStyle = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.btnBg,
  borderRadius: vars.borderRadius.full,
  padding: vars.spacing.sm,
});
