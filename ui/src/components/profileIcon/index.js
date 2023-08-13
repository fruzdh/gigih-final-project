import { Box } from "@chakra-ui/react";

const ProfileIcon = ({ color }) => {
  return (
    <Box
      h="30px"
      minH="30px"
      w="30px"
      minW="30px"
      borderRadius="50%"
      backgroundColor={color}
    ></Box>
  );
};

export default ProfileIcon;
