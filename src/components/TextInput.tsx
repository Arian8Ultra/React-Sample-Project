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
  let id = props.id != null ? props.id : "";
  let label = props.label != null ? props.label : "";
  let type = props.type != null ? props.type : "text";
  let idNum = props.idNum != null ? props.idNum : 0;
  let autoComplete = props.autoComplete != null ? props.autoComplete : "";
  let disabled = props.disabled != null ? props.disabled : false;
  let fontSize = props.fontSize != null ? props.fontSize : 16;
  let height = props.height != null ? props.height : "max-content";
  let width = props.width != null ? props.width : "max-content";

  let backgroundColor = props.backgroundColor != null ? props.backgroundColor : {};
  let hoverColor = props.hoverColor != null ? props.hoverColor : "white";
  let position = props.position != null ? props.position : "relative";
  let bottom = props.bottom != null ? props.bottom : "auto";
  let right = props.right != null ? props.right : "auto";
  let top = props.top != null ? props.top : "auto";
  let left = props.left != null ? props.left : "auto";
  let margin = props.margin != null ? props.margin : "0px";
  let helperText = props.helperText != null ? props.helperText : "";
  let error = props.error != null ? props.error : false;
  let size = props.size != null ? props.size : "normal";
  let multiline = props.multiline != null ? props.multiline : false;
  let rows = props.rows != null ? props.rows : 1;
  let maxRows = props.maxRows != null ? props.maxRows : 1;
  let py = props.py != null ? props.py : "0px";
  let px = props.px != null ? props.px : "0px";
  let getText = props.getText != null ? props.getText : () => {};
  let dir = props.dir != null ? props.dir : "rtl";
  let hasIcon = props.hasIcon != null ? props.hasIcon : false;
  let iconClick = props.iconClick != null ? props.iconClick : () => {};
  let iconColor = props.iconColor != null ? props.iconColor : "black";
  let iconHoverColor = props.iconHoverColor != null ? props.iconHoverColor : "black";
  let iconSize = props.iconSize != null ? props.iconSize : 16;
  let iconMargin = props.iconMargin != null ? props.iconMargin : "0px";
  let iconBackground = props.iconBackground != null ? props.iconBackground : "transparent";
  let fullWidth = props.fullWidth != null ? props.fullWidth : false;
  let defaultValue = props.defaultValue != null ? props.defaultValue : "";
  let placeholder = props.placeholder != null ? props.placeholder : "";
  let borderRadius = props.borderRadius != null ? props.borderRadius : "15px";
  let icon = props.icon != null ? props.icon : null;
  let iconPosition = props.iconPosition != null ? props.iconPosition : "end";
  let hasStickyText = props.hasStickyText != null ? props.hasStickyText : false;
  let stickyText = props.stickyText != null ? props.stickyText : "";
  let stickyTextColor = props.stickyTextColor != null ? props.stickyTextColor : "black";
  let stickyTextSize = props.stickyTextSize != null ? props.stickyTextSize : 16;
  let stickyTextMargin = props.stickyTextMargin != null ? props.stickyTextMargin : "0px";
  let shrink = props.shrink != null ? props.shrink : {};
  let hasButton = props.hasButton != null ? props.hasButton : false;
  let buttonOnClick = props.buttonOnClick != null ? props.buttonOnClick : () => {};
  let buttonColor = props.buttonColor != null ? props.buttonColor : "black";
  let buttonHoverColor = props.buttonHoverColor != null ? props.buttonHoverColor : "black";
  let items = props.items != null ? props.items : [];
  let isSelect = props.isSelect != null ? props.isSelect : false;
  let focus = props.focus != null ? props.focus : {};
  let border = props.border != null ? props.border : {};
  let borderColor = props.borderColor != null ? props.borderColor : primary;
  let borderColorHover = props.borderColorHover != null ? props.borderColorHover : secondary;
  let borderColorFocus = props.borderColorFocus != null ? props.borderColorFocus : secondary;

  let textColor = props.textColor != null ? props.textColor : borderColor;
  let textColorHover = props.textColorHover != null ? props.textColorHover : borderColorHover;
  let texColorFocus = props.texColorFocus != null ? props.texColorFocus : borderColorFocus;

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
          "right": right,
          "left": left,
          "top": top,
          "bottom": bottom,
          "position": position,
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
