import { Flex, IconButton, Input, Spacer, Text } from "@chakra-ui/react";
import { FaSistrix } from "react-icons/fa6";
import ProfileIcon from "../profileIcon";

const Header = () => {
  return (
    <Flex
      className="glass"
      p="15px"
      borderRadius="30px"
      alignItems="center"
      position="sticky"
      top="10px"
      gap="10px"
      boxShadow="0 4px 4px -2px #51C9CD"
      zIndex="sticky"
    >
      <form style={{ display: "flex", gap: "10px" }} onSubmit={() => {}}>
        <Input
          size="sm"
          borderRadius="20px"
          placeholder="search"
          textColor="white"
          _focus={{
            borderColor: "appBlue.light",
            boxShadow: "0 0 4px var(--chakra-colors-appBlue-light)",
          }}
        />
        <IconButton
          type="submit"
          icon={<FaSistrix />}
          size="sm"
          borderRadius="50%"
        />
      </form>
      <Spacer />
      <Text textColor="white">username</Text>
      <ProfileIcon color="#51C9CD" />
    </Flex>
  );
};

export default Header;
