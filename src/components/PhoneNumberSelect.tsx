import React from "react";
import { countries } from "../assets/Strings";
import { borderRadiuosTextField } from "../theme/Themes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
interface PhoneNumberSelectProps {
  id?: string;
  label?: string;
  type?: string;
  idNum?: number;
  autoComplete?: string;
  disabled?: boolean;
  fontSize?: number;
  height?: any;
  width?: any;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  position?: any;
  bottom?: any;
  right?: any;
  top?: any;
  left?: any;
  margin?: any;
  text?: string;
  value?: any;
  items?: any;
  helperText?: string;
  error?: boolean;
  size?: "small" | "medium" ;
  mx?: any;
  my?: any;
  getText?: any;
  setValue?: any;
  fullWidth?: boolean;
  firstValue?: string;
  borderRadius?: string;
  mt?: any;
  mb?: any;
  border?: string;
  display?: string;
  variant?: "standard" | "filled" | "outlined";
  getValue:Function;
}


function PhoneNumberSelect(props: PhoneNumberSelectProps) {
  props.id = props.id != null ? props.id : "";
  props.label = props.label != null ? props.label : "";
  props.width = props.width != null ? props.width : '100px';
  props.height = props.height != null ? props.height : {};
  props.fontSize = props.fontSize != null ? props.fontSize : 14;
  props.textColor = props.textColor != null ? props.textColor : "black";
  props.backgroundColor = props.backgroundColor != null ? props.backgroundColor : "";
  props.size = props.size != null ? props.size : "medium";
  props.getValue = props.getValue != null ? props.getValue : () => {};
  props.fullWidth = props.fullWidth != null ? props.fullWidth : false;
  props.firstValue = props.firstValue != null ? props.firstValue : "";
  props.borderRadius = props.borderRadius != null ? props.borderRadius : '15px';
  props.mt = props.mt != null ? props.mt : 0;
  props.mb = props.mb != null ? props.mb : 0;
  props.border = props.border != null ? props.border : "none";
  props.display = props.display != null ? props.display : "flex";
  props.variant = props.variant != null ? props.variant : "outlined";

  const [countryCode, setCountryCode] = React.useState("+1");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCountryCode(event.target.value);
    props.getValue(event.target.value);
  };

  return (
    <FormControl
      fullWidth={props.fullWidth}
      sx={{ borderRadius: borderRadiuosTextField }}
      variant={props.variant}
    >
      <InputLabel id={props.label}>{props.label}</InputLabel>
      <Select
        id={props.id}
        value={countryCode}
        label={props.label}
        onChange={handleChange}
        defaultValue={props.firstValue}
        // without any border
        sx={{
          "borderRadius": props.borderRadius,
          "backgroundColor": props.backgroundColor,
          "color": props.textColor,
          "width": props.width,
          "height": props.height,
          "border": props.border,
          "marginTop": props.mt,
          "mb": props.mb,
          "display": props.display,
          "fontSize": props.fontSize,
          "&:hover": {
            border: props.border,
          },
          "icon": {
            color: props.textColor,
          },
        }}
        size={props.size}
        // disableUnderline={variant === "standard" ? true : false}
        // change icon color of the select component
        MenuProps={{
          style: { zIndex: 35001, borderRadius: borderRadiuosTextField },
          PaperProps: {
            style: {
              borderRadius: borderRadiuosTextField,
            },
          },
        }}
        inputProps={{
          style: {
            borderRadius: borderRadiuosTextField,
            color: props.textColor,
            backgroundColor: props.backgroundColor,
            fontSize: props.fontSize,
            height: props.height,
            width: props.width,
            border: props.border,
            marginTop: props.mt,
            marginBottom: props.mb,
            display: props.display,
          },
        }}
      >
        {countries.map((option) => (
          <MenuItem key={option.code} value={option.dial_code} sx={{ zIndex: 20 }}>
            <img
              loading='lazy'
              width='20'
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=''
            />
            {option.code}
            {option.dial_code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PhoneNumberSelect;
