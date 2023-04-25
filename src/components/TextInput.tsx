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
import { onPrimary, primary, secondary } from "../theme/Colors";
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
  textColorHover?: object | number | string;
  texColorFocus?: object | number | string;
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
  items?: Array<string> | Array<number>;
  isSelect?: boolean;
  focus?: object | number | string;
  border?: object | number | string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorFocus?: string;
}

function TextInput(props: TextInputProps) {
  const id = props.id != null ? props.id : "";
  const label = props.label != null ? props.label : "";
  const type = props.type != null ? props.type : "text";
  const idNum = props.idNum != null ? props.idNum : 0;
  const autoComplete = props.autoComplete != null ? props.autoComplete : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : 16;
  const height = props.height != null ? props.height : "max-content";
  const width = props.width != null ? props.width : "max-content";

  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : {};
  const hoverColor = props.hoverColor != null ? props.hoverColor : "white";
  const position = props.position != null ? props.position : "relative";
  const bottom = props.bottom != null ? props.bottom : "auto";
  const right = props.right != null ? props.right : "auto";
  const top = props.top != null ? props.top : "auto";
  const left = props.left != null ? props.left : "auto";
  const margin = props.margin != null ? props.margin : "0px";
  const text = props.text != null ? props.text : "";
  const value = props.value != null ? props.value : "";
  const helperText = props.helperText != null ? props.helperText : "";
  const error = props.error != null ? props.error : false;
  const size = props.size != null ? props.size : "normal";
  const multiline = props.multiline != null ? props.multiline : false;
  const rows = props.rows != null ? props.rows : 1;
  const maxRows = props.maxRows != null ? props.maxRows : 1;
  const py = props.py != null ? props.py : "0px";
  const px = props.px != null ? props.px : "0px";
  const getText = props.getText != null ? props.getText : () => {};
  const dir = props.dir != null ? props.dir : "rtl";
  const hasIcon = props.hasIcon != null ? props.hasIcon : false;
  const iconClick = props.iconClick != null ? props.iconClick : () => {};
  const iconColor = props.iconColor != null ? props.iconColor : "black";
  const iconHoverColor = props.iconHoverColor != null ? props.iconHoverColor : "black";
  const iconSize = props.iconSize != null ? props.iconSize : 16;
  const iconMargin = props.iconMargin != null ? props.iconMargin : "0px";
  const iconBackground = props.iconBackground != null ? props.iconBackground : "transparent";
  const fullWidth = props.fullWidth != null ? props.fullWidth : false;
  const defaultValue = props.defaultValue != null ? props.defaultValue : "";
  const placeholder = props.placeholder != null ? props.placeholder : "";
  const borderRadius = props.borderRadius != null ? props.borderRadius : "15px";
  const icon = props.icon != null ? props.icon : null;
  const iconPosition = props.iconPosition != null ? props.iconPosition : "end";
  const hasStickyText = props.hasStickyText != null ? props.hasStickyText : false;
  const stickyText = props.stickyText != null ? props.stickyText : "";
  const stickyTextColor = props.stickyTextColor != null ? props.stickyTextColor : "black";
  const stickyTextSize = props.stickyTextSize != null ? props.stickyTextSize : 16;
  const stickyTextMargin = props.stickyTextMargin != null ? props.stickyTextMargin : "0px";
  const shrink = props.shrink != null ? props.shrink : {};
  const children = props.children != null ? props.children : null;
  const hasButton = props.hasButton != null ? props.hasButton : false;
  const buttonOnClick = props.buttonOnClick != null ? props.buttonOnClick : () => {};
  const buttonColor = props.buttonColor != null ? props.buttonColor : "black";
  const buttonHoverColor = props.buttonHoverColor != null ? props.buttonHoverColor : "black";
  const items = props.items != null ? props.items : [];
  const isSelect = props.isSelect != null ? props.isSelect : false;
  const focus = props.focus != null ? props.focus : {};
  const border = props.border != null ? props.border : {};
  const borderColor = props.borderColor != null ? props.borderColor : primary;
  const borderColorHover = props.borderColorHover != null ? props.borderColorHover : secondary;
  const borderColorFocus = props.borderColorFocus != null ? props.borderColorFocus : secondary;

  const textColor = props.textColor != null ? props.textColor : borderColor;
  const textColorHover = props.textColorHover != null ? props.textColorHover :borderColorHover;
  const texColorFocus = props.texColorFocus != null ? props.texColorFocus : borderColorFocus;

  const [textValue, setTextValue] = useState(props.value);
  useEffect(() => {
    // @ts-ignore
    setTextValue(props.value);
  }, [props.value]);

  const changeData = (data: any) => {
    setTextValue(data);
    getText(data);
  };

  const onButtonClick = () => {
    // @ts-ignore
    buttonOnClick();
    setTextValue("");
  };

  return (
    <Box display={"flex"}>
      <TextField
        onChange={(newValue) => changeData(newValue.target.value)}
        name={id}
        label={props.label}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        value={textValue}
        autoComplete={autoComplete}
        variant='outlined'
        type={type}
        disabled={disabled}
        error={error}
        helperText={helperText}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        maxRows={maxRows}
        dir={dir}
        // add icon
        InputProps={{
          endAdornment: hasIcon ? (
            // @ts-ignore
            <InputAdornment position={iconPosition} onClick={iconClick}>
              <IconButton
                sx={{
                  "color": iconColor,
                  "&:hover": { color: iconHoverColor },
                  // change icon size
                  "fontSize": iconSize,
                  "backgroundColor": iconBackground,
                }}
              >
                {icon}
              </IconButton>
            </InputAdornment>
          ) : null,
          sx: {
            borderRadius: borderRadius,
            borderTopRightRadius: hasButton ? 0 : borderRadius,
            borderBottomRightRadius: hasButton ? 0 : borderRadius,
          },
          startAdornment: hasStickyText ? (
            <InputAdornment position='start'>
              <Typography
                sx={{
                  color: stickyTextColor,
                  fontSize: stickyTextSize,
                  margin: stickyTextMargin,
                }}
              >
                {stickyText}
              </Typography>
            </InputAdornment>
          ) : null,
        }}
        sx={{
          "boxShadow": 0,
          "borderRadius": hasButton ? 0 : borderRadius,
          "py": py,
          "px": px,
          "width": width,
          "fontSize": fontSize,
          "backgroundColor": backgroundColor,
          "color": textColor,
          "&:focus": focus,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: borderColor,
            },
            "&:hover fieldset": {
              borderColor: borderColorHover,
            },
            "&.Mui-focused fieldset": {
              borderColor: borderColorFocus,
            },
          },
        }}
        InputLabelProps={{
          size: size,
          sx: {
            "color": textColor,
            "&.Mui-focused": {
              color: texColorFocus,
            },
            "&:hover": {
              color: textColorHover,
            },
          },
        }}
      />
      {isSelect &&
        items?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      {hasButton && (
        <Button
          sx={{
            "color": textColor,
            "bgcolor": buttonColor,
            "borderRadius": borderRadiuosTextField,
            "borderTopLeftRadius": 0,
            "borderBottomLeftRadius": 0,
            "&:hover": {
              backgroundColor: buttonHoverColor,
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
