import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const inputCol = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.md,
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.sm,
});

export const button = style({
  backgroundColor: vars.color.btnActiveBg,
  color: vars.color.white,
});
