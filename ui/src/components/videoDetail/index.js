import { Flex, Text } from "@chakra-ui/react";
import { FaCalendarDays, FaEye } from "react-icons/fa6";

const VideoDetail = ({ timestamp, viewCount, ...rest }) => {
  return (
    <Flex
      className="glass"
      textColor="white"
      align="center"
      gap="10px"
      p="10px"
      w="100%"
      justify="flex-end"
      boxShadow={"0 4px 4px -2px var(--chakra-colors-appBlue-light)"}
      {...rest}
    >
      <FaCalendarDays />
      <Text>{timestamp}</Text>
      <FaEye />
      <Text>{viewCount}</Text>
    </Flex>
  );
};

export default VideoDetail;
