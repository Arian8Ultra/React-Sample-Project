import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLayoutStore from "../context/layoutStore";
import { Center } from "@chakra-ui/react";
import { Button, ClickAwayListener, Icon, Stack } from "@mui/material";
import { borderRadiuos, borderRadiuosButton, borderRadiuosMenu } from "../theme/Themes";
import { onPrimary } from "../theme/Colors";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowUpwardRounded,
  Expand,
  ExpandMoreRounded,
} from "@mui/icons-material";

interface NavbarButtonProps {
  children?: React.ReactNode;
  name: string;
  link?: string;
  onClick?: () => void;
  textColor?: string | object;
  backgroundColor?: string | object;
  hasMenu?: boolean;
  menuItems?: { name: string; link: string }[];
  menuBackgroundColor?: string | object;
  menuTextColor?: string | object;
  hoverBackgroundColor?: string | object;
  sx?: object;
}


function NavbarButton(props: NavbarButtonProps) {
  let textColor = props.textColor ? props.textColor : onPrimary;
  let backgroundColor = props.backgroundColor ? props.backgroundColor : "transparent";
  let hoverBackgroundColor = props.hoverBackgroundColor
    ? props.hoverBackgroundColor
    : "rgba(255, 255, 255, 0.1)";
  let menuBackgroundColor = props.menuBackgroundColor ? props.menuBackgroundColor : onPrimary;
  let menuTextColor = props.menuTextColor ? props.menuTextColor : "primary";
  let hasMenu = props.hasMenu ? props.hasMenu : false;

  const navigate = useNavigate();
  const pageName = useLayoutStore((state) => state.pageName);
  const changePageName = useLayoutStore((state) => state.changePageName);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    props.link && navigate(`${props.link}`);
    changePageName(props.name);
  };
  return (
    <Center flexDir={"column"} position={"relative"}>
      <Button
        onClick={handleClick}
        onMouseEnter={() => {
          setOpenMenu(true);
        }}
        sx={{
          "color": textColor,
          "backgroundColor": backgroundColor,
          "borderRadius": borderRadiuosButton,
          "&:hover": {
            backgroundColor: hoverBackgroundColor,
          },
        }}
      >
        {!props.children && props.name}
        {hasMenu ? !openMenu ? <ArrowDropDown /> : <ArrowDropUp /> : ""}
        {props.children}
      </Button>
      <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
        <Stack
          direction={"column"}
          spacing={1}
          onMouseLeave={() => {
            setOpenMenu(false);
          }}
          sx={{
            position: "absolute",
            top: "100%",
            // left: "50%",
            // transform: "translateX(-50%)",
            zIndex: 1000,
            scale: openMenu ? 1 : 0,
            transition: "scale 0.2s ease-in-out",
            backgroundColor: menuBackgroundColor,
            borderRadius: borderRadiuosMenu,
            padding: "10px 0px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          }}
        >
          {hasMenu &&
            props.menuItems &&
            props.menuItems.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    navigate(`${item.link}`);
                    changePageName(item.name);
                  }}
                  sx={{
                    "color": menuTextColor,
                    "backgroundColor": menuBackgroundColor,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
        </Stack>
      </ClickAwayListener>
    </Center>
  );
}

export default NavbarButton;
