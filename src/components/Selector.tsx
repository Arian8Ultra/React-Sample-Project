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

export default function Selector(
  id: string | undefined,
  label: string | undefined,
  items: string[] | object[] | undefined,
  getValue: Function,
  fullWidth: boolean | undefined,
  width: string | undefined,
  height: string | undefined,
  variant: "standard" | "outlined" | "filled" | undefined,
  fontColor: string | undefined,
  border: string | undefined,
  firstValue: string | undefined,
  mt: number | string | any,
  mb: number | string | any,
  backgroundColor: string | undefined,
  borderRadius: string | number | undefined,
  display: string | undefined,
  fontSize: number | undefined,
  size: "small" | "medium" | undefined,
) {
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

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
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
            marginBottom: mb,
            display: display,
          },
        }}
      >
        {/* check if the items are object or string */}

        {typeof items[0] === "string"
          ? items.map((option) => (
              // @ts-ignore
              <MenuItem key={option} value={option} sx={{ zIndex: 20 }}>
                {option}
              </MenuItem>
            ))
          : items.map(
              // @ts-ignore
              (option: {
                value: string | number | readonly string[] | undefined;
                label: React.ReactNode;
              }) => (
                // @ts-ignore
                <MenuItem key={option.value} value={option.value} sx={{ zIndex: 20 }}>
                  {option.label}
                </MenuItem>
              ),
            )}
      </Select>
    </FormControl>
  );
}
