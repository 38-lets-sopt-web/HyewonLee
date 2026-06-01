import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const signup = style({
  display: "flex",
  flexDirection: "column",
  width: "35%",
  gap: vars.spacing.lg,
});

export const main = style({
  minHeight: "120vh",
});

export const pclass = style({
  color: vars.color.textPlaceholder,
  textAlign: "center",
});
