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
  let text = props.text != null ? props.text : "";
  let link = props.link != null ? props.link : "";
  let pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let disabled = props.disabled != null ? props.disabled : false;
  let fontSize = props.fontSize != null ? props.fontSize : 20;
  let height = props.height != null ? props.height : {};
  let width = props.width != null ? props.width : {};
  let minWidth = props.minWidth != null ? props.minWidth : {};
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
  let icon = props.icon != null ? props.icon : "";
  let borderRadius = props.borderRadius != null ? props.borderRadius : '10px';
  let boxShadow = props.boxShadow != null ? props.boxShadow : {};
  let hoverColor = props.hoverColor != null ? props.hoverColor : {};
  let fun = props.fun != null ? props.fun : null;
  let color = props.color != null ? props.color : onSecondary;
  let backgroundColor = props.backgroundColor != null ? props.backgroundColor : secondary;
  let children = props.children != null ? props.children : null;
  let url = props.url != null ? props.url : '';
  let label = props.label != null ? props.label : '';

  const navigate = useNavigate();

  const handleClick = () => {
    if (props.fun) {
      props.fun();
    }
    if (props.pageTitle) {
      console.log(props.pageTitle);
      document.title = props.pageTitle;
    }
    if (props.link) {
      navigate(`${props.link}`);
    }
    if (props.url) {
      window.open(props.url, "_blank");
    }
  };

  return (
    <IconButton
    aria-label={props.label}
      sx={{
        "width": width,
        "height": height,
        "borderRadius": borderRadius,
        "bottom": bottom,
        "left": left,
        "right": right,
        "top": top,
        "m": margin,
        "mt": mt,
        "mr": mr,
        "ml": ml,
        "mb": mb,
        "color": color,
        "backgroundColor": backgroundColor,
        "minWidth": minWidth,
        "fontSize": fontSize,
        "padding": padding,
        "&:hover": {
          backgroundColor: hoverColor,
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
