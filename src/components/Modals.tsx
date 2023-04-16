import { Center, Text } from "@chakra-ui/react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Box, IconButton, Modal, Stack } from "@mui/material";
import {
  backgroundBlue,
  backgroundPurple,
  onPrimary,
  primary,
  primaryDark,
  primaryLight,
  primaryLightTransparent,
} from "../theme/Colors";
import { borderRadiuosMenu } from "../theme/Themes";

interface NewModalProps {
  width?: string|number|object;
  color?: string;
  children?: any;
  name?: string;
  open: boolean;
  changeModal?: Function;
  backgroundColor?: string;
  isCloseable?: boolean;
  dividerColor?: string;
}

export default function NewModal(props: NewModalProps) {
  props.name = props.name != null ? props.name : "عنوان";
  props.width = props.width != null ? props.width : "30vmax";
  props.backgroundColor = props.backgroundColor != null ? props.backgroundColor : primaryLightTransparent;
  props.isCloseable = props.isCloseable != null ? props.isCloseable : true;
  props.dividerColor = props.dividerColor != null ? props.dividerColor : 'transparent';
  const { width, color, children, name, backgroundColor, isCloseable, dividerColor, ...rest } = props;

  const handleClose = () => {
    if (props.isCloseable) props.changeModal && props.changeModal();
  };
  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: props.width,
          bgcolor: props.backgroundColor,
          boxShadow: 24,
          borderRadius: borderRadiuosMenu,
          backdropFilter: "blur(5px)",
          p: 4,
        }}
        {...rest}
      >
        <Center>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            width={isCloseable ? "100%" : "max-content"}
          >
            <Text fontSize='25px' fontWeight='bold' color={props.color} textAlign={"center"}>
              {props.name}
            </Text>
            {props.isCloseable && (
              <IconButton onClick={handleClose}>
                <CancelRoundedIcon sx={{ color: props.color != null ? props.color : onPrimary }} />
              </IconButton>
            )}
          </Stack>
        </Center>
        <Box width='100%' height='2px' bgcolor={props.dividerColor} my={"10px"} borderRadius={"20px"} />
        <Center>{props.children}</Center>
      </Box>
    </Modal>
  );
}
