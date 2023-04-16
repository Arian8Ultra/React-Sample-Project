import * as React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onPrimary, primary, primaryDark, primaryLight, secondary } from "../theme/Colors";
import { borderRadiuosButton } from "../theme/Themes";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

interface BackButtonProps {
  text: string;
  link: string;
  pageTitle: string;
  disabled: boolean;
  fontSize: number;
  height: object | number | string;
  width: object | number | string;
  minWidth: object | number | string;
  textColor: object | number | string;
  backgroundColor: string;
  hoverColor: string;
  position: object | number | string;
  bottom: object | number | string;
  right: object | number | string;
  top: object | number | string;
  left: object | number | string;
  margin: object | number | string;
  mt: object | number | string;
  ml: object | number | string;
  mr: object | number | string;
  mb: object | number | string;
  padding: object | number | string;
  pt: object | number | string;
  pl: object | number | string;
  pr: object | number | string;
  pb: object | number | string;
  onClick: Function;
  children: React.ReactNode | object | any;
  fun: Function;
  fullWidth: boolean;
  icon: string;
  Endicon: string;
  borderRadius: string;
  boxShadow: object | number | string;
  type: string;
  variant: string;
  border: object | number | string;
  borderRight: string;
  borderLeft: string;
  borderTop: string;
  borderBottom: string;
  borderColor: string;
  href: string;
}

export default function BackButton(props: BackButtonProps) {
  props.text = props.text != null ? props.text : "";
  props.link = props.link != null ? props.link : "";
  props.pageTitle = props.pageTitle != null ? props.pageTitle : "";
  props.disabled = props.disabled != null ? props.disabled : false;
  props.fontSize = props.fontSize != null ? props.fontSize : 16;
  props.height = props.height != null ? props.height : "max-content";
  props.width = props.width != null ? props.width : "max-content";
  props.minWidth = props.minWidth != null ? props.minWidth : "max-content";
  props.textColor = props.textColor != null ? props.textColor : onPrimary;
  props.backgroundColor = props.backgroundColor || secondary;
  props.hoverColor = props.hoverColor != null ? props.hoverColor : primaryLight;
  props.position = props.position != null ? props.position : {};
  props.bottom = props.bottom != null ? props.bottom : {};
  props.right = props.right != null ? props.right : {};
  props.top = props.top != null ? props.top : {};
  props.left = props.left != null ? props.left : {};
  props.margin = props.margin != null ? props.margin : {};
  props.mt = props.mt != null ? props.mt : {};
  props.ml = props.ml != null ? props.ml : {};
  props.mr = props.mr != null ? props.mr : {};
  props.mb = props.mb != null ? props.mb : {};
  props.padding = props.padding != null ? props.padding : {};
  props.fullWidth = props.fullWidth != null ? props.fullWidth : false;
  props.icon = props.icon != null ? props.icon : "";
  props.Endicon = props.Endicon != null ? props.Endicon : "";
  props.borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  props.boxShadow = props.boxShadow != null ? props.boxShadow : {};
  props.pt = props.pt != null ? props.pt : {};
  props.pl = props.pl != null ? props.pl : {};
  props.pr = props.pr != null ? props.pr : {};
  props.pb = props.pb != null ? props.pb : {};
  props.children = props.children != null ? props.children : <></>;
  props.fun = props.fun != null ? props.fun : function () {};
  props.variant = props.variant != null ? props.variant : "contained";
  props.type = props.type != null ? props.type : "button";
  props.border = props.border != null ? props.border : "none";
  props.borderRight = props.borderRight != null ? props.borderRight : "none";
  props.borderLeft = props.borderLeft != null ? props.borderLeft : "none";
  props.borderTop = props.borderTop != null ? props.borderTop : "none";
  props.borderBottom = props.borderBottom != null ? props.borderBottom : "none";
  props.borderColor = props.borderColor != null ? props.borderColor : "none";
  props.onClick = props.onClick != null ? props.onClick : function () {};

  const navigate = useNavigate();

  return (
    <Button
      // @ts-ignore
      variant={props.variant}
      type={props.type}
      startIcon={props.icon}
      endIcon={props.Endicon}
      sx={{
        "width": props.width,
        "height": props.height,
        "borderRadius": props.borderRadius,
        "color": props.textColor,
        "backgroundColor": props.backgroundColor,
        "fontSize": props.fontSize,
        "position": props.position,
        "bottom": props.bottom,
        "left": props.left,
        "right": props.right,
        "top": props.top,
        "m": props.margin,
        "mt": props.mt,
        "mr": props.mr,
        "ml": props.ml,
        "mb": props.mb,
        "minWidth": props.minWidth,
        "padding": props.padding,
        "boxShadow": props.boxShadow,
        "border": props.border,
        "borderRight": props.borderRight,
        "borderLeft": props.borderLeft,
        "borderTop": props.borderTop,
        "borderBottom": props.borderBottom,
        "borderColor": props.borderColor,
        "pt": props.pt,
        "pl": props.pl,
        "pr": props.pr,
        "pb": props.pb,
        "display": "flex",
        "alignItems": "center",
        "&:hover": {
          backgroundColor: props.hoverColor,
          boxShadow: props.boxShadow,
        },
      }}
      onClick={() => navigate(-1)}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
    >
      بازگشت
    </Button>
  );
}
