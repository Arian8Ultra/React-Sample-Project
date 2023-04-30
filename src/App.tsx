import { ChakraProvider } from "@chakra-ui/react";
import { FollowTheSigns } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import OTPInput from "./components/OTPInput";
import TextInput from "./components/TextInput";
import { primary, secondary } from "./theme/Colors";

function App() {
  const [text, setText] = useState("");

  return (
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"60%"}
          gap={"20px"}
          flexWrap={"wrap"}
        >
          <TextInput
            getText={setText}
            iconClick={() => {}}
            iconPosition={"end"}
            width={"100%"}
            label='text input normal'
            border={"1px solid red"}
            textColor={"black"}
            dir='ltr'
          />
          <TextInput
            getText={setText}
            iconClick={() => {}}
            iconPosition={"end"}
            width={"100%"}
            label='text input with button'
            border={"1px solid red"}
            hasButton
            buttonColor={primary}
            buttonHoverColor={secondary}
            dir='ltr'
          />
          <TextInput
            getText={setText}
            iconClick={() => {}}
            iconPosition={"end"}
            width={"100%"}
            label='text input with icon'
            border={"1px solid red"}
            hasIcon
            dir='ltr'
            icon={<FollowTheSigns />}
            iconColor={primary}
            iconHoverColor={secondary}
          />
          <TextInput
            getText={setText}
            iconClick={() => {}}
            iconPosition={"end"}
            width={"100%"}
            label='text input with sticky text'
            border={"1px solid red"}
            hasStickyText
            dir='ltr'
            stickyText='sticky text'
          />
          <ChakraProvider>
            <label>OTP Input</label>
            <OTPInput getData={setText} />
          </ChakraProvider>
        </Box>
      </Box>
  );
}

export default App;
