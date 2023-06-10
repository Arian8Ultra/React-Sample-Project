import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { primary } from "../theme/Colors";

interface Props {
  children?: React.ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  top?: object | number | string;
  bottom?: object | number| string;
  left?: object | number| string;
  right?: object | number| string;
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
  isUnderDrawer?: boolean;
}

function Navbar(props: Props) {

  let background = props.background || primary;
  let backdropFilter = props.backdropFilter || "none";
  let justifyContent = props.justifyContent || "center";
  let width = props.width || "100%";
  let height = props.height || {};
  let padding = props.padding || "0";
  let direction = props.direction || "ltr";
  let position = props.position || "fixed";
  let top = props.top || 0;
  let variant = props.variant || "elevation";
  let elevation = props.elevation || 0;
  let isUnderDrawer = props.isUnderDrawer || false;

  return (
    <AppBar
      position={position}
      variant={variant}
      elevation={elevation}
      dir={direction}
      sx={{
        zIndex: !isUnderDrawer ?(theme) => theme.zIndex.drawer + 2 : 0,
        borderBottom: 0,
        width: width,
        height: height,
        justifyContent: justifyContent,
        background: background,
        backdropFilter: backdropFilter,
        p: padding,
        top: top,
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
