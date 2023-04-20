import { CheckCircleOutlineRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { onPrimary } from "../theme/Colors";
import { borderRadiuosTextField } from "../theme/Themes";

interface TextInputProps {
  id?: string;
  label?: string;
  type?: string;
  idNum?: number;
  autoComplete?: string;
  disabled?: boolean;
  fontSize?: number | string;
  height?: object | number | string;
  width?: object | number | string;
  textColor?: object | number | string;
  backgroundColor?: string;
  hoverColor?: string;
  position?: object | number | string;
  bottom?: object | number | string;
  right?: object | number | string;
  top?: object | number | string;
  left?: object | number | string;
  margin?: object | number | string;
  text?: string;
  value?: string;
  helperText?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  py?: object | number | string;
  px?: object | number | string;
  getText: Function;
  dir?: string;
  hasIcon?: boolean;
  iconClick: Function;
  iconColor?: string;
  iconHoverColor?: string;
  iconSize?: number | string;
  iconPosition: "end" | "start";
  iconMargin?: object | number | string;
  iconBackground?: string;
  fullWidth?: boolean;
  defaultValue?: string;
  placeholder?: string;
  borderRadius?: string;
  icon?: any;
  size?: "small" | "normal";
  hasStickyText?: boolean;
  stickyText?: string;
  stickyTextColor?: string;
  stickyTextSize?: number;
  stickyTextMargin?: string;
  shrink?: boolean;
  children?: any;
  hasButton?: boolean;
  buttonOnClick?: Function;
  buttonColor?: string;
  buttonHoverColor?: string;
  items?: Array<string>;
  isSelect?: boolean;
  focus: object | number | string;
}

function TextInput(props: TextInputProps) {
  props.id = props.id != null ? props.id : "";
  props.label = props.label != null ? props.label : "";
  props.type = props.type != null ? props.type : "text";
  props.idNum = props.idNum != null ? props.idNum : 0;
  props.autoComplete = props.autoComplete != null ? props.autoComplete : "";
  props.disabled = props.disabled != null ? props.disabled : false;
  props.fontSize = props.fontSize != null ? props.fontSize : 16;
  props.height = props.height != null ? props.height : "max-content";
  props.width = props.width != null ? props.width : "max-content";
  props.textColor = props.textColor != null ? props.textColor : "black";
  props.backgroundColor = props.backgroundColor != null ? props.backgroundColor : "white";
  props.hoverColor = props.hoverColor != null ? props.hoverColor : "white";
  props.position = props.position != null ? props.position : "relative";
  props.bottom = props.bottom != null ? props.bottom : "auto";
  props.right = props.right != null ? props.right : "auto";
  props.top = props.top != null ? props.top : "auto";
  props.left = props.left != null ? props.left : "auto";
  props.margin = props.margin != null ? props.margin : "0px";
  props.text = props.text != null ? props.text : "";
  props.value = props.value != null ? props.value : "";
  props.helperText = props.helperText != null ? props.helperText : "";
  props.error = props.error != null ? props.error : false;
  props.size = props.size != null ? props.size : "normal";
  props.multiline = props.multiline != null ? props.multiline : false;
  props.rows = props.rows != null ? props.rows : 1;
  props.maxRows = props.maxRows != null ? props.maxRows : 1;
  props.py = props.py != null ? props.py : "0px";
  props.px = props.px != null ? props.px : "0px";
  props.getText = props.getText != null ? props.getText : () => {};
  props.dir = props.dir != null ? props.dir : "rtl";
  props.hasIcon = props.hasIcon != null ? props.hasIcon : false;
  props.iconClick = props.iconClick != null ? props.iconClick : () => {};
  props.iconColor = props.iconColor != null ? props.iconColor : "black";
  props.iconHoverColor = props.iconHoverColor != null ? props.iconHoverColor : "black";
  props.iconSize = props.iconSize != null ? props.iconSize : 16;
  props.iconMargin = props.iconMargin != null ? props.iconMargin : "0px";
  props.iconBackground = props.iconBackground != null ? props.iconBackground : "transparent";
  props.fullWidth = props.fullWidth != null ? props.fullWidth : false;
  props.defaultValue = props.defaultValue != null ? props.defaultValue : "";
  props.placeholder = props.placeholder != null ? props.placeholder : "";
  props.borderRadius = props.borderRadius != null ? props.borderRadius : "15px";
  props.icon = props.icon != null ? props.icon : null;
  props.iconPosition = props.iconPosition != null ? props.iconPosition : "end";
  props.hasStickyText = props.hasStickyText != null ? props.hasStickyText : false;
  props.stickyText = props.stickyText != null ? props.stickyText : "";
  props.stickyTextColor = props.stickyTextColor != null ? props.stickyTextColor : "black";
  props.stickyTextSize = props.stickyTextSize != null ? props.stickyTextSize : 16;
  props.stickyTextMargin = props.stickyTextMargin != null ? props.stickyTextMargin : "0px";
  props.shrink = props.shrink != null ? props.shrink : false;
  props.children = props.children != null ? props.children : null;
  props.hasButton = props.hasButton != null ? props.hasButton : false;
  props.buttonOnClick = props.buttonOnClick != null ? props.buttonOnClick : () => {};
  props.buttonColor = props.buttonColor != null ? props.buttonColor : "black";
  props.buttonHoverColor = props.buttonHoverColor != null ? props.buttonHoverColor : "black";
  props.items = props.items != null ? props.items : [];
  props.isSelect = props.isSelect != null ? props.isSelect : false;
  props.focus = props.focus != null ? props.focus : {};

  const [textValue, setTextValue] = useState(props.value);
  useEffect(() => {
    // @ts-ignore
    setTextValue(props.value);
  }, [props.value]);

  const changeData = (data: any) => {
    setTextValue(data);
    props.getText(data);
  };

  const onButtonClick = () => {
    // @ts-ignore
    props.buttonOnClick();
    setTextValue("");
  };

  return (
    <Box display={"flex"}>
      <TextField
        onChange={(newValue) => changeData(newValue.target.value)}
        name={props.id}
        label={props.label}
        fullWidth={props.fullWidth}
        defaultValue={props.defaultValue}
        value={textValue}
        autoComplete={props.autoComplete}
        variant='outlined'
        type={props.type}
        disabled={props.disabled}
        error={props.error}
        helperText={props.helperText}
        multiline={props.multiline}
        rows={props.rows}
        placeholder={props.placeholder}
        maxRows={props.maxRows}
        dir={props.dir}
        // add icon
        InputProps={{
          endAdornment: props.hasIcon ? (
            // @ts-ignore
            <InputAdornment position={props.iconPosition} onClick={props.iconClick}>
              <IconButton
                sx={{
                  "color": props.iconColor,
                  "&:hover": { color: props.iconHoverColor },
                  // change icon size
                  "fontSize": props.iconSize,
                  "backgroundColor": props.iconBackground,
                }}
              >
                {props.icon}
              </IconButton>
            </InputAdornment>
          ) : null,
          sx: { borderRadius: props.borderRadius },
          startAdornment: props.hasStickyText ? (
            <InputAdornment position='start'>
              <Typography
                sx={{
                  color: props.stickyTextColor,
                  fontSize: props.stickyTextSize,
                  margin: props.stickyTextMargin,
                }}
              >
                {props.stickyText}
              </Typography>
            </InputAdornment>
          ) : null,
        }}
        sx={{
          boxShadow: 0,
          borderRadius: props.borderRadius,
          py: props.py,
          px: props.px,
          width: props.width,
          fontSize: props.fontSize,
          backgroundColor: props.backgroundColor,
          color: props.textColor,
          '&:focus': props.focus,
        }}
        InputLabelProps={{
          size: props.size,
          shrink: props.shrink,
        }}
      />
      {props.isSelect &&
        props.items?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      {props.hasButton && (
        <Button
          sx={{
            "color": props.textColor,
            "bgcolor": props.buttonColor,
            "borderRadius": borderRadiuosTextField,
            "borderTopLeftRadius": 0,
            "borderBottomLeftRadius": 0,
            "&:hover": {
              backgroundColor: props.buttonHoverColor,
            },
          }}
          onClick={onButtonClick}
        >
          <CheckCircleOutlineRounded sx={{ color: onPrimary }} />
        </Button>
      )}
    </Box>
  );
}

export default TextInput;
