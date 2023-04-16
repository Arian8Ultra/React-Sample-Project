import * as React from "react";
// @ts-ignore
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// @ts-ignore
import { borderRadiuosButton, borderRadiuosTextField } from "../theme/Themes";
// @ts-ignore
import { ArrowDownwardRounded } from "@mui/icons-material";

export default function Selector({
  // @ts-ignore
  id,
  // @ts-ignore
  label,
  // @ts-ignore
  items,
  // @ts-ignore
  getValue,
  // @ts-ignore
  fullWidth,
  // @ts-ignore
  width,
  // @ts-ignore
  height,
  // @ts-ignore
  variant,
  // @ts-ignore
  fontColor,
  // @ts-ignore
  border,
  // @ts-ignore
  firstValue,
  // @ts-ignore
  mt,
  // @ts-ignore
  mb,
  // @ts-ignore
  backgroundColor,
  // @ts-ignore
  borderRadius,
  // @ts-ignore
  display,
  // @ts-ignore
  fontSize,
  // @ts-ignore
  size,
}) {
  id = id != null ? id : "";
  label = label != null ? label : "";
  items = items != null ? items : [];
  getValue = getValue != null ? getValue : () => {};
  fullWidth = fullWidth != null ? fullWidth : false;
  width = width != null ? width : "100%";
  height = height != null ? height : "max-content";
  variant = variant != null ? variant : "outlined";
  fontColor = fontColor != null ? fontColor : "black";
  border = border != null ? border : "none";
  firstValue = firstValue != null ? firstValue : "";
  mt = mt != null ? mt : 0;
  mb = mb != null ? mb : 0;
  backgroundColor = backgroundColor != null ? backgroundColor : "transparent";
  borderRadius = borderRadius != null ? borderRadius : borderRadiuosTextField;
  display = display != null ? display : "flex";
  fontSize = fontSize != null ? fontSize : 16;
  size = size != null ? size : "small";
  const [value, setValue] = React.useState(firstValue);

  // @ts-ignore
  const handleChange = (event) => {
    setValue(event.target.value);
    getValue(event.target.value);
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{ borderRadius: borderRadiuosTextField }}
      variant={variant}
    >
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        defaultValue={firstValue}
        // without any border
        sx={{
          "borderRadius": borderRadius,
          "backgroundColor": backgroundColor,
          "color": fontColor,
          "width": width,
          "height": height,
          "border": border,
          "marginTop": mt,
          "mb": mb,
          "display": display,
          "fontSize": fontSize,
          "&:hover": {
            border: border,
          },
          "icon": {
            color: fontColor,
          },
        }}
        size={size}
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
            color: fontColor,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            height: height,
            // width: width,
            border: border,
            marginTop: mt,
            // @ts-ignore
            mb: mb,
            display: display,
          },
        }}
      >
        {items.map((
// @ts-ignore
        option) => (
          <MenuItem key={option} value={option} sx={{ zIndex: 20 }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
