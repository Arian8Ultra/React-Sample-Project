import { Drawer as MUIDrawer } from "@mui/material";
import React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  anchor: "left" | "right" | "top" | "bottom";
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
  props.open = props.open || false;
  props.onClose = props.onClose || (() => {});
  props.anchor = props.anchor || "left";
  props.width = props.width || "auto";
  props.height = props.height || "auto";
  props.backgroundColor = props.backgroundColor || "white";
  props.top = props.top || {};
  props.bottom = props.bottom || {};
  props.left = props.left || {};
  props.right = props.right || {};
  props.PaperProps = props.PaperProps || {};
  props.variant = props.variant || "temporary";
  props.sx = props.sx || {};
  props.border = props.border || "none";

  return (
    <MUIDrawer
      open={props.open}
      onClose={props.onClose}
      anchor={props.anchor}
      sx={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: props.width,
        },
        ...props.sx,
      }}
      PaperProps={{
        // @ts-ignore
        backgroundColor: props.backgroundColor,
        border: props.border,
        height: props.height,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        borderRadius: props.borderRadius,
        ...props.PaperProps,
      }}
      variant={props.variant}
    >
      {props.children}
    </MUIDrawer>
  );
}

export default Drawer;
