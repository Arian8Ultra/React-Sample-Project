import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { onSecondary, secondary, secondaryLight } from "../theme/Colors";
import { borderRadiuosTextField } from "../theme/Themes";

interface IButtonProps {
  text?: string;
  link?: string;
  pageTitle: string;
  disabled?: boolean;
  fontSize?: number;
  height?: string|number|object;
  width?: string|number|object;
  minWidth?: string|number|object;
  position?: string|number|object;
  bottom?: string|number|object;
  right?: string|number|object;
  top?: string|number|object;
  left?: string|number|object;
  margin?: string|number|object;
  mt?: string|number|object;
  ml?: string|number|object;
  mr?: string|number|object;
  mb?: string|number|object;
  padding?: string|number|object;
  icon?: any;
  borderRadius?: string;
  boxShadow?: string|number|object;
  hoverColor?: string|number|object;
  fun?: any;
  color?: string;
  backgroundColor?: string;
  children?: any;
  url?: string;
  label?: string;
}

export default function IButton(props: IButtonProps) {
  props.text = props.text != null ? props.text : "";
  props.link = props.link != null ? props.link : "";
  props.pageTitle = props.pageTitle != null ? props.pageTitle : "";
  props.disabled = props.disabled != null ? props.disabled : false;
  props.fontSize = props.fontSize != null ? props.fontSize : 20;
  props.height = props.height != null ? props.height : {};
  props.width = props.width != null ? props.width : {};
  props.minWidth = props.minWidth != null ? props.minWidth : {};
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
  props.icon = props.icon != null ? props.icon : "";
  props.borderRadius = props.borderRadius != null ? props.borderRadius : '10px';
  props.boxShadow = props.boxShadow != null ? props.boxShadow : {};
  props.hoverColor = props.hoverColor != null ? props.hoverColor : {};
  props.fun = props.fun != null ? props.fun : null;
  props.color = props.color != null ? props.color : onSecondary;
  props.backgroundColor = props.backgroundColor != null ? props.backgroundColor : secondary;
  props.children = props.children != null ? props.children : null;
  props.url = props.url != null ? props.url : '';
  props.label = props.label != null ? props.label : '';

  const navigate = useNavigate();

  const handleClick = () => {
    if (props.fun != null) {
      props.fun();
    }
    if (props.pageTitle != '') {
      console.log(props.pageTitle);
      document.title = props.pageTitle;
    }
    if (props.link != '') {
      navigate(`${props.link}`);
    }
    if (props.url != null) {
      window.open(props.url, "_blank");
    }
  };

  return (
    <IconButton
    aria-label={props.label}
      sx={{
        "width": props.width,
        "height": props.height,
        "borderRadius": props.borderRadius,
        "bottom": props.bottom,
        "left": props.left,
        "right": props.right,
        "top": props.top,
        "m": props.margin,
        "mt": props.mt,
        "mr": props.mr,
        "ml": props.ml,
        "mb": props.mb,
        "color": props.color,
        "backgroundColor": props.backgroundColor,
        "minWidth": props.minWidth,
        "fontSize": props.fontSize,
        "padding": props.padding,
        "&:hover": {
          backgroundColor: props.hoverColor,
        },
      }}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.icon}
      {props.children}
    </IconButton>
  );
}
