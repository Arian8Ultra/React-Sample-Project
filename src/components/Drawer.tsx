import { Drawer as MUIDrawer, Toolbar } from "@mui/material";
import React from "react";

interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
  width?: number | string | object;
  height?: number | string | object;
  backgroundColor?: string;
  children: React.ReactNode;
  top?: number | string | object;
  bottom?: number | string | object;
  left?: number | string | object;
  right?: number | string | object;
  PaperProps?: object;
  variant?: "permanent" | "persistent" | "temporary";
  sx?: object;
  border?: string | object | number;
  borderRadius?: string | object | number;
}
function Drawer(props: DrawerProps) {
  let open = props.open || false;
  let onClose = props.onClose || (() => {});
  let anchor = props.anchor || "left";
  let width = props.width || {};
  let height = props.height || "auto";
  let backgroundColor = props.backgroundColor || "white";
  let top = props.top || {};
  let bottom = props.bottom || {};
  let left = props.left || {};
  let right = props.right || {};
  let PaperProps = props.PaperProps || {};
  let variant = props.variant || "temporary";
  let border = props.border || "none";

  return (
    <MUIDrawer
      open={props.open}
      onClose={props.onClose}
      anchor={props.anchor}
      sx={{
        "width": width,
        "height": height,
        "top": top,
        "bottom": bottom,
        "left": left,
        "right": right,
        "flexShrink": 0,
        "& .MuiDrawer-paper": {
          width: width,
        },
        ...props.sx,
      }}
      PaperProps={{
        sx: {
          backgroundColor: backgroundColor,
          border: border,
          height: height,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          borderRadius: props.borderRadius,
          ...props.PaperProps,
        },
      }}
      variant={props.variant}
    >
      {props.children}
    </MUIDrawer>
  );
}

export default Drawer;
