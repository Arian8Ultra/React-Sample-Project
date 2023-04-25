import { createTheme } from "@mui/material/styles";
import {
  background,
  primary, secondary, secondaryDark, secondaryLight
} from "./Colors";


export const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn,sans-serif",
  },
  palette: {
    mode:"dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
      light: secondaryLight,
      dark: secondaryDark,
    },
    background:{
      default:background,
      paper:'#ffffff',
    }
  },
  direction: "rtl",
});

export const borderRadiuos = '100px'; /* 4 */
export const borderRadiuosMenu = 4; /* 4 */
export const borderRadiuosTextField = 5; /* 50 */
export const borderRadiuosButton = '100px'; /* ' 20px 50px 50px 20px' */
