import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import React from "react";

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
}

// create react functional component
export default function OTPInput(props: OTPInputProps) {
  props.numberOfSpaces = props.numberOfSpaces || 0;
  props.spaceBetweenInputs = props.spaceBetweenInputs || 0;
  props.indexOfSpace = props.indexOfSpace || 0;
  props.numberOfInputs = props.numberOfInputs || 3;
  props.focusColor = props.focusColor || "red";
  props.textColor = props.textColor || "black";
  props.mainColor = props.mainColor || "black";
  props.boxShadow = props.boxShadow || {};
  props.getData = props.getData || function () {};
  props.maxWidth = props.maxWidth || "100%";
  props.height = props.height || "60px";
  props.spaceBetween = props.spaceBetween || "1";
  props.direction = props.direction || "row-reverse";
  props.backgroundColor = props.backgroundColor || "transparent";
  const [otp, setOtp] = React.useState(new Array(props.numberOfInputs + props.numberOfSpaces).fill(" "));
  const [value, setValue] = React.useState("");
  const [valueArray, setValueArray] = React.useState(new Array(props.numberOfInputs).fill(" "));

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
      setValueArray(new Array(props.numberOfInputs).fill(" "));
    }
  };

  React.useEffect(() => {
    props.getData(valueArray.join(""));
  }, [otp]);

  return (
    // adding rtl support to chakra ui

    <ChakraProvider>
      <Center>
        <Box
          display={"flex"}
          // @ts-ignore
          flexDir={props.direction}
          justifyContent={"space-between"}
          width={"100%"}
          maxWidth={props.maxWidth}
        >
          {otp.map((data, index) => (
            <Input
              key={index}
              onChange={(e) => handleOnChange(e, index)}
              textAlign='center'
              height={props.height}
              mx={props.spaceBetween}
              backgroundColor={props.backgroundColor}
              // onFocus change box shadow to focusColor and border to focusColor
              _focus={{ borderColor: props.focusColor, boxShadow: `0 0 10px 2px ${props.focusColor}` }}
            />
          ))}
        </Box>
      </Center>
    </ChakraProvider>
  );
}
