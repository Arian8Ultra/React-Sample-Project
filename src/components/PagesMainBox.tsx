// This component is used to create the main box of the page
// importing the necessary components and hooks from react and material-ui
import { styled } from "@mui/material/styles";
import { memo } from "react";

const drawerWidth = "15vmax";
const halfDrawerWidth = "10vmax";

// creating the main box component with the styles and the props
const MainBox = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  // @ts-ignore
  ({ theme, open, dw }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: dw!=null? `${dw-dw/4}vmax` : halfDrawerWidth,
    marginRight: dw!=null? `${dw-dw/4}vmax` : halfDrawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft:drawerWidth,
    }),
  }),
);
export default memo(MainBox);
