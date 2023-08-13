import { Box, Button, Text } from "@chakra-ui/react";
import { FaRegFaceSadTear } from "react-icons/fa6";

const Error = ({ error, ...rest }) => {
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
      <Text>
        error when load data:{" "}
        {error?.response?.data ? error?.response?.data : error?.message}
      </Text>
      <Button onClick={() => window.location.reload()}>REFRESH</Button>
    </Box>
  );
};

export default Error;
