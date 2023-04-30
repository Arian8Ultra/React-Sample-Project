import * as React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onPrimary, primary, primaryDark, primaryLight, secondary } from "../theme/Colors";
import { borderRadiuosButton } from "../theme/Themes";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

interface BackButtonProps {
  text?: string;
  link?: string;
  pageTitle?: string;
  disabled?: boolean;
  fontSize?: number;
  height?: object | number | string;
  width?: object | number | string;
  minWidth?: object | number | string;
  textColor?: object | number | string;
  backgroundColor?: string;
  hoverColor?: string;
  position?: object | number | string;
  bottom?: object | number | string;
  right?: object | number | string;
  top?: object | number | string;
  left?: object | number | string;
  margin?: object | number | string;
  mt?: object | number | string;
  ml?: object | number | string;
  mr?: object | number | string;
  mb?: object | number | string;
  padding?: object | number | string;
  pt?: object | number | string;
  pl?: object | number | string;
  pr?: object | number | string;
  pb?: object | number | string;
  onClick?: Function;
  children?: React.ReactNode | object | any;
  fun?: Function;
  fullWidth?: boolean;
  icon?: string;
  Endicon?: string;
  borderRadius?: string;
  boxShadow?: object | number | string;
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outlined" | "contained";
  border?: object | number | string;
  borderRight?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
  borderColor?: string;
  href?: string;
}

export default function BackButton(props: BackButtonProps) {
  let text = props.text != null ? props.text : "";
  let link = props.link != null ? props.link : "";
  let pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let disabled = props.disabled != null ? props.disabled : false;
  let fontSize = props.fontSize != null ? props.fontSize : 16;
  let height = props.height != null ? props.height : "max-content";
  let width = props.width != null ? props.width : "max-content";
  let minWidth = props.minWidth != null ? props.minWidth : "max-content";
  let textColor = props.textColor != null ? props.textColor : onPrimary;
  let backgroundColor = props.backgroundColor || secondary;
  let hoverColor = props.hoverColor != null ? props.hoverColor : primaryLight;
  let position = props.position != null ? props.position : {};
  let bottom = props.bottom != null ? props.bottom : {};
  let right = props.right != null ? props.right : {};
  let top = props.top != null ? props.top : {};
  let left = props.left != null ? props.left : {};
  let margin = props.margin != null ? props.margin : {};
  let mt = props.mt != null ? props.mt : {};
  let ml = props.ml != null ? props.ml : {};
  let mr = props.mr != null ? props.mr : {};
  let mb = props.mb != null ? props.mb : {};
  let padding = props.padding != null ? props.padding : {};
  let fullWidth = props.fullWidth != null ? props.fullWidth : false;
  let icon = props.icon != null ? props.icon : "";
  let Endicon = props.Endicon != null ? props.Endicon : "";
  let borderRadius = props.borderRadius != null ? props.borderRadius : borderRadiuosButton;
  let boxShadow = props.boxShadow != null ? props.boxShadow : {};
  let pt = props.pt != null ? props.pt : {};
  let pl = props.pl != null ? props.pl : {};
  let pr = props.pr != null ? props.pr : {};
  let pb = props.pb != null ? props.pb : {};
  let children = props.children != null ? props.children : <></>;
  let fun = props.fun != null ? props.fun : function () {};
  let variant = props.variant != null ? props.variant : "contained";
  let border = props.border != null ? props.border : "none";
  let borderRight = props.borderRight != null ? props.borderRight : "none";
  let borderLeft = props.borderLeft != null ? props.borderLeft : "none";
  let borderTop = props.borderTop != null ? props.borderTop : "none";
  let borderBottom = props.borderBottom != null ? props.borderBottom : "none";
  let borderColor = props.borderColor != null ? props.borderColor : "none";

  const navigate = useNavigate();

  return (
    <Button
      variant={props.variant}
      type={props.type}
      startIcon={props.icon}
      endIcon={props.Endicon}
      sx={{
        "width": width,
        "height": height,
        "borderRadius": borderRadius,
        "color": textColor,
        "backgroundColor": backgroundColor,
        "fontSize": fontSize,
        "position": position,
        "bottom": bottom,
        "left": left,
        "right": right,
        "top": top,
        "m": margin,
        "mt": mt,
        "mr": mr,
        "ml": ml,
        "mb": mb,
        "minWidth": minWidth,
        "padding": padding,
        "boxShadow": boxShadow,
        "border": border,
        "borderRight": borderRight,
        "borderLeft": borderLeft,
        "borderTop": borderTop,
        "borderBottom": borderBottom,
        "borderColor": borderColor,
        "pt": pt,
        "pl": pl,
        "pr": pr,
        "pb": pb,
        "display": "flex",
        "alignItems": "center",
        "&:hover": {
          backgroundColor: hoverColor,
          boxShadow: boxShadow,
        },
      }}
      onClick={() => navigate(-1)}
      fullWidth={props.fullWidth}
      disabled={props.disabled}
    >
      Back
    </Button>
  );
}
