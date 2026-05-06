import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const cardList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.md,
  marginTop: vars.spacing.md,
});
