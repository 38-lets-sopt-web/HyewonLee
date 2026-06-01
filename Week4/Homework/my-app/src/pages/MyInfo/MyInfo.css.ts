import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  width: "35%",
  gap: vars.spacing.md,
});

export const infoBox = style({
  color: vars.color.textPrimary,
  backgroundColor: vars.color.btnBg,
  width: "100%",
  padding: vars.spacing.lg,
  borderRadius: vars.borderRadius.md,
  fontWeight: vars.fontWeight.sb,
});

export const infoItem = style({
  display: "flex",
  justifyContent: "space-between",
});
