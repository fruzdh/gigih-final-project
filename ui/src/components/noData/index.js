import { Box, Text } from "@chakra-ui/react";
import { FaRegFaceSadTear } from "react-icons/fa6";

const NoData = ({ ...rest }) => {
  return (
    <Box
      display="flex"
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="white"
      fontSize="2xl"
      gap="10px"
      textAlign="center"
      {...rest}
    >
      <FaRegFaceSadTear />
      <Text>sorry, there is no data</Text>
    </Box>
  );
};

export default NoData;
