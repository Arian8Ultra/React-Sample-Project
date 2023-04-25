import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextInput from "./components/TextInput";
import { FollowTheSigns } from "@mui/icons-material";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Themes";
import { primary, secondary } from "./theme/Colors";
import OTPInput from "./components/OTPInput";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className='App' style={{
        width: "100%",
        height: '100vh',
      }}>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"}>
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
      </div>
    </ThemeProvider>
  );
}

export default App;
