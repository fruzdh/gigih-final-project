import { Box, Flex, Text } from "@chakra-ui/react";
import ProfileIcon from "../../../../components/profileIcon";

const CommentCard = ({ username, profileColor, commnet, timestamp }) => {
  return (
    <Flex
      className="glass"
      p="10px"
      gap="10px"
      borderRadius="10px"
      boxShadow={`0 4px 4px -2px ${profileColor}`}
      mb="10px"
    >
      <ProfileIcon color={profileColor} />
      <Box textColor="white">
        <Flex gap="10px">
          <Text fontWeight="bold">{username}</Text>
          <Text textColor="lightgray">{timestamp}</Text>
        </Flex>
        <Text>{commnet}</Text>
      </Box>
    </Flex>
  );
};

export default CommentCard;
