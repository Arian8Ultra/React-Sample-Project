import { AppBar, Toolbar } from "@mui/material";
import React from "react";

interface Props {
  children?: React.ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  top?: object | number;
  bottom?: object | number;
  left?: object | number;
  right?: object | number;
  elevation?: number;
  sx?: object;
  variant?: "elevation" | "outlined";
  background?: string;
  backdropFilter ?: string;
  justifyContent?: string;
  width?: object | number | string;
  height?: object | number | string;
  padding?: object | number | string;
  direction?: string;
}

function Navbar(props: Props) {

  let background = props.background || "transparent";
  let backdropFilter = props.backdropFilter || "none";
  let justifyContent = props.justifyContent || "center";
  let width = props.width || "100%";
  let height = props.height || "100%";
  let padding = props.padding || "0";
  let direction = props.direction || "ltr";
  let position = props.position || "fixed";
  let variant = props.variant || "elevation";
  let elevation = props.elevation || 0;

  return (
    <AppBar
      position={position}
      variant={variant}
      elevation={elevation}
      dir={direction}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        borderBottom: 0,
        width: width,
        height: height,
        justifyContent: justifyContent,
        background: background,
        backdropFilter: backdropFilter,
        p: padding,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        ...props.sx,
      }}
    >
      <Toolbar disableGutters>{props.children}</Toolbar>
    </AppBar>
  );
}

export default Navbar;
