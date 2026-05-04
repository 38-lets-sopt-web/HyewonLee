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

globalStyle("button", {
  cursor: "pointer",
  border: "none",
  background: "none",
});
