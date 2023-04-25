import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import React from "react";
import { primary } from "../theme/Colors";

interface OTPInputProps {
  numberOfInputs?: number;
  getData: Function;
  spaceBetweenInputs?: number;
  indexOfSpace?: number;
  numberOfSpaces?: number;
  focusColor?: string;
  textColor?: string;
  mainColor?: string;
  boxShadow?: object;
  maxWidth?: string;
  height?: string;
  spaceBetween?: string;
  direction?: string;
  backgroundColor?: string;
  placeholder?: string;
  hasShadow?: boolean;
}

// create react functional component
export default function OTPInput(props: OTPInputProps) {
  const numberOfSpaces = props.numberOfSpaces || 0;
  const spaceBetweenInputs = props.spaceBetweenInputs || 0;
  const indexOfSpace = props.indexOfSpace || 0;
  const numberOfInputs = props.numberOfInputs || 3;
  const focusColor = props.focusColor || primary;
  const textColor = props.textColor || "black";
  const mainColor = props.mainColor || "black";
  const boxShadow = props.boxShadow || {};
  const getData = props.getData || function () {};
  const maxWidth = props.maxWidth || "100%";
  const height = props.height || "60px";
  const spaceBetween = props.spaceBetween || "1";
  const direction = props.direction || "row";
  const backgroundColor = props.backgroundColor || "transparent";
  const [otp, setOtp] = React.useState(new Array(numberOfInputs + numberOfSpaces).fill(" "));
  const [value, setValue] = React.useState("");
  const [valueArray, setValueArray] = React.useState(new Array(numberOfInputs).fill(" "));
  const placeholder = props.placeholder || "-";
  const hasShadow = props.hasShadow || false;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    setValue(value + e.target.value);
    setValueArray(valueArray.map((data, i) => (i === index ? e.target.value : data)));
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[0];
      setValue(value + e.target.value[0]);
      setValueArray(valueArray.map((data, i) => (i === index ? e.target.value[0] : data)));
    }
    let otpCopy = [...otp];
    // @ts-ignore
    otpCopy[e.target.dataset.index] = e.target.value;
    setOtp(otpCopy);
    // handle forward focus
    if (e.target.nextSibling && e.target.value !== "") {
      // @ts-ignore
      e.target.nextSibling.focus();
    }

    // handle backspace
    if (e.target.value === "" && e.target.previousSibling) {
      // @ts-ignore
      e.target.previousSibling.focus();
      setValue(value.slice(0, -1));
      setValueArray(valueArray.map((data, i) => (i === index ? "" : data)));
    }

    if (index === 0 && e.target.value === "") {
      setValue("");
      setValueArray(new Array(numberOfInputs).fill(" "));
    }
  };

  React.useEffect(() => {
    getData(valueArray.join(""));
  }, [otp]);

  return (
    // adding rtl support to chakra ui
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
        display={"flex"}
        // @ts-ignore
        flexDir={direction}
        justifyContent={"space-between"}
        width={"100%"}
        maxWidth={maxWidth}
      >
        {otp.map((data, index) => (
          <Input
            key={index}
            onChange={(e) => handleOnChange(e, index)}
            textAlign='center'
            height={height}
            mx={spaceBetween}
            backgroundColor={backgroundColor}
            placeholder={placeholder}
            _focus={{
              borderColor: focusColor,
              boxShadow: hasShadow && `0 0 10px 2px ${focusColor}`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
