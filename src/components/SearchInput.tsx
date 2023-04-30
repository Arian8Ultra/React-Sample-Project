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
  let id = props.id;
  let label = props.label != null ? props.label : "label";
  let type = props.type != null ? props.type : "text";
  let idNum = props.idNum;
  let autoComplete = props.autoComplete != null ? props.autoComplete : "";
  let disabled = props.disabled != null ? props.disabled : false;
  let fontSize = props.fontSize != null ? props.fontSize : 16;
  let height = props.height != null ? props.height : {};
  let width = props.width != null ? props.width : {};
  let textColor = props.textColor != null ? props.textColor : "black";
  let backgroundColor = props.backgroundColor != null ? props.backgroundColor : "";
  let hoverColor = props.hoverColor != null ? props.hoverColor : "";
  let position = props.position != null ? props.position : {};
  let bottom = props.bottom != null ? props.bottom : {};
  let right = props.right != null ? props.right : {};
  let top = props.top != null ? props.top : {};
  let left = props.left != null ? props.left : {};
  let margin = props.margin != null ? props.margin : {};
  let text = props.text != null ? props.text : "text";
  let value = props.setValue != null ? props.setValue : {};
  let items = props.items != null ? props.items : [];
  let helperText = props.helperText != null ? props.helperText : "";
  let error = props.error != null ? props.error : false;
  let size = props.size != null ? props.size : "small";
  let mx = props.mx != null ? props.mx : {};
  let my = props.my != null ? props.my : {};

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
