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
  let text = props.text != null ? props.text : "";
  let link = props.link != null ? props.link : "";
  let pageTitle = props.pageTitle != null ? props.pageTitle : "";
  let disabled = props.disabled != null ? props.disabled : false;
  let fontSize = props.fontSize != null ? props.fontSize : 16;
  let height = props.height != null ? props.height : "max-content";
  let width = props.width != null ? props.width : "max-content";
  let minWidth = props.minWidth != null ? props.minWidth : "max-content";
  let textColor = props.textColor != null ? props.textColor : onPrimary;
  let backgroundColor = props.backgroundColor != null ? props.backgroundColor : secondary;
  let hoverColor = props.hoverColor != null ? props.hoverColor : secondaryLight;
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
  let onClick = props.onClick != null ? props.onClick : () => {};
  let children = props.children != null ? props.children : "";
  let variant = props.variant != null ? props.variant : "contained";
  let type = props.type != null ? props.type : "button";
  let border = props.border != null ? props.border : "none";
  let borderRight = props.borderRight != null ? props.borderRight : "none";
  let borderLeft = props.borderLeft != null ? props.borderLeft : "none";
  let borderTop = props.borderTop != null ? props.borderTop : "none";
  let borderBottom = props.borderBottom != null ? props.borderBottom : "none";
  let borderColor = props.borderColor != null ? props.borderColor : "none";
  let setFiles = props.setFiles != null ? props.setFiles : () => {};
  let multiple = props.multiple != null ? props.multiple : false;
  let fileType = props.fileType != null ? props.fileType : "image/*";
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
        "&:hover": {
          backgroundColor: hoverColor,
          boxShadow: boxShadow,
        },
      }}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
    >
      {/* input for file with format of fileType */}
      <input
        type='file'
        accept={fileType}
        multiple={multiple}
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
