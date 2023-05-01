import { ArrowBackIos, ArrowBackRounded, MenuRounded } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import { onPrimary, primary, primaryTransparent } from "../theme/Colors";
import { Center } from "@chakra-ui/react";
import Drawer from "../components/Drawer";
import { useState } from "react";

function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box>
      <Drawer
        sx={{
          position: "fixed",
        }}
        open={drawerOpen}
        variant={"temporary"}
        height={"88vh"}
        top={"8vh"}
        left={"1%"}
        borderRadius={"15px"}
        backgroundColor={primaryTransparent}
        PaperProps={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Stack width={"100%"} px={5} direction={"row"} alignContent={"center"} py={5}>
          <Center>
            <LinkButton
              fullWidth
              width={"100%"}
              variant='text'
              backgroundColor='transparent'
              padding={"5px 30px"}
            >
              Home
            </LinkButton>
          </Center>
        </Stack>
      </Drawer>
      <Navbar
        background={primaryTransparent}
        top={10}
        width={"98%"}
        right={"1%"}
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
          <Center>
            <LinkButton variant='text' backgroundColor='transparent' padding={"0 20px"}>
              Home
            </LinkButton>
          </Center>
          <Center>
            <LinkButton variant='text' backgroundColor='transparent' padding={"0 20px"}>
              Admin
            </LinkButton>
          </Center>
          <Center>
            <LinkButton variant='text' backgroundColor='transparent' padding={"0 20px"}>
              About
            </LinkButton>
          </Center>
        </Stack>
      </Navbar>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
