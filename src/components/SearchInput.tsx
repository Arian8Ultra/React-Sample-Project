import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";
import { borderRadiuosTextField } from "../theme/Themes";

interface SearchInputProps {
  id: string;
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
  size?: "small" | "normal";
  mx?: any;
  my?: any;
  getText?: any;
  setValue?: any;
}

export default function SearchInput(props: SearchInputProps) {
  const id = props.id;
  const label = props.label != null ? props.label : "label";
  const type = props.type != null ? props.type : "text";
  const idNum = props.idNum;
  const autoComplete = props.autoComplete != null ? props.autoComplete : "";
  const disabled = props.disabled != null ? props.disabled : false;
  const fontSize = props.fontSize != null ? props.fontSize : 16;
  const height = props.height != null ? props.height : {};
  const width = props.width != null ? props.width : {};
  const textColor = props.textColor != null ? props.textColor : "black";
  const backgroundColor = props.backgroundColor != null ? props.backgroundColor : "";
  const hoverColor = props.hoverColor != null ? props.hoverColor : "";
  const position = props.position != null ? props.position : {};
  const bottom = props.bottom != null ? props.bottom : {};
  const right = props.right != null ? props.right : {};
  const top = props.top != null ? props.top : {};
  const left = props.left != null ? props.left : {};
  const margin = props.margin != null ? props.margin : {};
  const text = props.text != null ? props.text : "text";
  const value = props.setValue != null ? props.setValue : {};
  const items = props.items != null ? props.items : [];
  const helperText = props.helperText != null ? props.helperText : "";
  const error = props.error != null ? props.error : false;
  const size = props.size != null ? props.size : "small";
  const mx = props.mx != null ? props.mx : {};
  const my = props.my != null ? props.my : {};

  const changeData = (data: any) => {
    props.getText(data);
  };
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={items}
      onChange={(event, value) => changeData(value)}
      sx={{
        boxShadow: 0,
        height: 45,
        borderRadius: borderRadiuosTextField,
        margin: margin,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          sx={{
            boxShadow: 0,
            height: 45,
            borderRadius: borderRadiuosTextField,
            margin: margin,
            mx: mx,
            my: my,
            backgroundColor: backgroundColor,
          }}
          InputProps={{
            ...params.InputProps,
            sx: { height: 45, borderRadius: borderRadiuosTextField },
          }}
          InputLabelProps={{
            size: size,
          }}
        />
      )}
    />
  );
}
