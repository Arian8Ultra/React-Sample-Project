import { Center } from "@chakra-ui/react";
import { ArrowBackRounded, MenuRounded } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import NavbarButton from "../components/NavbarButton";
import { onPrimary, primaryTransparent } from "../theme/Colors";

function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box position={"relative"}>
      <Navbar
        background={primaryTransparent}
        top={10}
        width={"98%"}
        right={"1%"}
        height={"7vh"}
        elevation={10}
        sx={{
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
        }}
      >
        <Stack width={"100%"} pr={5} direction={"row"} alignContent={"center"}>
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{
              color: onPrimary,
              mx: 2,
            }}
          >
            {drawerOpen ? <ArrowBackRounded /> : <MenuRounded />}
          </IconButton>
          <NavbarButton name='Home' hasMenu menuItems={[{ name: "1", link: "Home" }]} />
          <NavbarButton name='Admin' />
        </Stack>
      </Navbar>
      <Drawer
        sx={{
          position: "fixed",
        }}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={"temporary"}
        height={"88vh"}
        top={"10vh"}
        left={"1%"}
        borderRadius={"15px"}
        backgroundColor={primaryTransparent}
        PaperProps={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Stack px={5} direction={"row"} alignContent={"center"} py={5}>
          <Center>
            <LinkButton
              variant='text'
              backgroundColor='transparent'
              padding={"5px 30px"}
            >
              Home
            </LinkButton>
          </Center>
        </Stack>
      </Drawer>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
