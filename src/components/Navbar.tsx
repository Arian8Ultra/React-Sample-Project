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

  const background = props.background || "transparent";
  const backdropFilter = props.backdropFilter || "none";
  const justifyContent = props.justifyContent || "center";
  const width = props.width || "100%";
  const height = props.height || "100%";
  const padding = props.padding || "0";
  const direction = props.direction || "ltr";
  const position = props.position || "fixed";
  const variant = props.variant || "elevation";
  const elevation = props.elevation || 0;

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
