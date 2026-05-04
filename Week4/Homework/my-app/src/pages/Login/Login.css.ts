import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const login = style({
  display: "flex",
  flexDirection: "column",
  width: "35%",
  gap: vars.spacing.lg,
});

export const main = style({
  minHeight: "100vh",
});
