import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  width: "35%",
  gap: vars.spacing.md,
  marginTop: vars.spacing.lg,
});

export const searchBox = style({
  color: vars.color.textPrimary,
  fontWeight: vars.fontWeight.sb,
  backgroundColor: vars.color.btnBg,
  width: "100%",
  height: "150px",
  borderRadius: vars.borderRadius.md,
  textAlign: "center",
  padding: vars.spacing.lg,
});

export const searchItem = style({
  display: "flex",
  justifyContent: "space-between",
});

export const members = style({
  display: "flex",
  width: "90%",
  marginTop: vars.spacing.lg,
  padding: vars.spacing.lg,
});

export const ptext = style({
  fontWeight: vars.fontWeight.sb,
});
