import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.spacing.md}`,
  backgroundColor: vars.color.headerBg,
  color: vars.color.white,
});

export const title = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
});

export const nav = style({
  display: "flex",
  gap: vars.spacing.md,
  alignItems: "center",
});

export const navItem = style({
  cursor: "pointer",
  color: "inherit",
  textDecoration: "none",
  fontWeight: "normal",
});

export const navItemActive = style({
  cursor: "pointer",
  fontWeight: vars.fontWeight.bold,
  color: "inherit",
  textDecoration: "none",
});
