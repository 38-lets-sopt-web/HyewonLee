import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  background: vars.color.pageBg,
  fontFamily: vars.font.family,
  fontSize: vars.fontSize.sm,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle("h1", {
  color: vars.color.textPrimary,
  textAlign: "center",
});

globalStyle("label", {
  color: vars.color.black,
  fontWeight: vars.fontWeight.sb,
});

globalStyle("input, textarea, select", {
  color: "inherit",
});

globalStyle("input", {
  border: `2px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.sm,
  padding: vars.spacing.sm,
  color: vars.color.black,
});

globalStyle("input:focus", {
  borderColor: vars.color.borderFocus,
  outline: "none",
});

globalStyle("input::placeholder", {
  color: vars.color.textPlaceholder,
});

globalStyle("button", {
  cursor: "pointer",
  border: "none",
  background: "none",
  padding: vars.spacing.sm,
  borderRadius: vars.borderRadius.sm,
  fontWeight: vars.fontWeight.sb,
});

globalStyle("button:hover", {
  backgroundColor: vars.color.btnHoverBg,
});

globalStyle("a", {
  textAlign: "center",
  color: vars.color.textAccent,
  fontWeight: vars.fontWeight.sb,
});
