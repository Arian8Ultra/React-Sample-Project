import { Center, Image } from "@chakra-ui/react";
import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  onPrimary,
  primary,
  primaryDark,
  primaryLight,
  secondary,
  secondaryLight,
} from "../theme/Colors";
import { borderRadiuosButton, borderRadiuosTextField } from "../theme/Themes";

interface FileButtonProps {
  text?: string;
  link?: string;
  pageTitle: string;
  disabled?: boolean;
  fontSize?: number | object | string;
  height?: string | number | object;
  width?: string | number | object;
  minWidth?: string | number | object;
  textColor?: string | number | object;
  backgroundColor?: string | number | object;
  hoverColor?: string | number | object;
  position?: string | number | object;
  bottom?: string | number | object;
  right?: string | number | object;
  top?: string | number | object;
  left?: string | number | object;
  margin?: string | number | object;
  mt?: string | number | object;
  ml?: string | number | object;
  mr?: string | number | object;
  mb?: string | number | object;
  padding?: string | number | object;
  pt?: string | number | object;
  pl?: string | number | object;
  pr?: string | number | object;
  pb?: string | number | object;
  onClick?: Function;
  children?: any;
  fullWidth?: boolean;
  icon?: any;
  Endicon?: any;
  borderRadius?: string;
  boxShadow?: string | number | object;
  type?: string;
  variant?: any;
  border?: string;
  borderRight?: string;
  borderLeft?: string;
  borderTop?: string;
  borderBottom?: string;
  borderColor?: string;
  multiple?: boolean;
  setFiles?: Function;
  fileType?: string;
  [x: string]: any;
}

function FileButton(props: FileButtonProps) {
  props.text = props.text != null ? props.text : "";
  props.link = props.link != null ? props.link : "";
  props.pageTitle = props.pageTitle != null ? props.pageTitle : "";
  props.disabled = props.disabled != null ? props.disabled : false;
  props.fontSize = props.fontSize != null ? props.fontSize : 16;
  props.height = props.height != null ? props.height : "max-content";
  props.width = props.width != null ? props.width : "max-content";
  props.minWidth = props.minWidth != null ? props.minWidth : "max-content";
  props.textColor = props.textColor != null ? props.textColor : onPrimary;
  props.backgroundColor = props.backgroundColor != null ? props.backgroundColor : secondary;
  props.hoverColor = props.hoverColor != null ? props.hoverColor : secondaryLight;
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
  props.onClick = props.onClick != null ? props.onClick : () => {};
  props.children = props.children != null ? props.children : "";
  props.variant = props.variant != null ? props.variant : "contained";
  props.type = props.type != null ? props.type : "button";
  props.border = props.border != null ? props.border : "none";
  props.borderRight = props.borderRight != null ? props.borderRight : "none";
  props.borderLeft = props.borderLeft != null ? props.borderLeft : "none";
  props.borderTop = props.borderTop != null ? props.borderTop : "none";
  props.borderBottom = props.borderBottom != null ? props.borderBottom : "none";
  props.borderColor = props.borderColor != null ? props.borderColor : "none";
  props.setFiles = props.setFiles != null ? props.setFiles : () => {};
  props.multiple = props.multiple != null ? props.multiple : false;
  props.fileType = props.fileType != null ? props.fileType : "image/*";
  const [fileName, setFileName] = React.useState("");
  const [file, setFile] = React.useState(null);

  const handleFile = (e: { target: { files: any; }; }) => {
    const files = e.target.files;
    setFile(files[0]);
    props.setFiles && props.setFiles(files);
    setFileName(files[0].name);
  };

  return (
    <Button
      variant={props.variant}
      component='label'
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
        "&:hover": {
          backgroundColor: props.hoverColor,
          boxShadow: props.boxShadow,
        },
      }}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
    >
      {/* input for file with format of fileType */}
      <input
        type='file'
        accept={props.fileType}
        multiple={props.multiple}
        onChange={handleFile}
        hidden
      />

      <Center height={"100%"}>
        {props.text}
        {props.children}
        {props.icon}
        {fileName}
      </Center>
    </Button>
  );
}

export default FileButton;
