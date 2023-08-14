import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaCircleUser, FaHouse, FaSistrix } from "react-icons/fa6";
import ProfileIcon from "../profileIcon";
import useAuth from "../../hooks/useAuth";
import useRegisterLogin from "../../hooks/useRegisterLogin";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useDevice from "../../hooks/useDevice";

const Header = () => {
  const { user, logout } = useAuth();
  const { onOpen, onRegister, onLogin } = useRegisterLogin();

  const { isMobile } = useDevice();

  const history = useHistory();
  const [productTitle, setProductTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/?product_title=${productTitle}`);
  };

  const handleRegister = () => {
    onRegister();
    onOpen();
  };

  const handleLogin = () => {
    onLogin();
    onOpen();
  };

  return (
    <Flex
      className="glass"
      p="15px"
      borderRadius="30px"
      alignItems="center"
      position="sticky"
      top="10px"
      gap="10px"
      boxShadow={`0 4px 4px -2px ${
        user?.profile_color ? user?.profile_color : "#51C9CD"
      }`}
      zIndex="sticky"
    >
      <IconButton
        icon={<FaHouse />}
        size="sm"
        borderRadius="50%"
        onClick={() => history.push("/")}
      />
      <Spacer />
      <form style={{ display: "flex", gap: "10px" }} onSubmit={handleSearch}>
        <Input
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          size="sm"
          borderRadius="20px"
          placeholder="product title"
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
      {(user?.username || isMobile) && (
        <Menu>
          <MenuButton>
            <Flex align="center" gap="10px" textColor="white">
              {user?.username ? (
                <>
                  {!isMobile && <Text fontWeight="bold">{user?.username}</Text>}

                  <ProfileIcon color={user?.profile_color} />
                </>
              ) : (
                <Box fontSize="3xl">
                  <FaCircleUser />
                </Box>
              )}
            </Flex>
          </MenuButton>
          <MenuList
            backgroundColor="#2D2D2D"
            textColor="white"
            border="1px solid var(--chakra-colors-appBlue-light)"
            boxShadow="0 0 8px var(--chakra-colors-appBlue-light)"
          >
            {user?.username ? (
              <>
                {isMobile && (
                  <MenuItem
                    bgColor="#2D2D2D"
                    borderBottom="1px solid var(--chakra-colors-appBlue-light)"
                  >
                    <Flex align="center" gap="10px">
                      <Text textColor="white" fontWeight="bold">
                        {user?.username}
                      </Text>
                      <ProfileIcon color={user?.profile_color} />
                    </Flex>
                  </MenuItem>
                )}
                <MenuItem backgroundColor="#2D2D2D" onClick={logout}>
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem backgroundColor="#2D2D2D" onClick={handleRegister}>
                  Register
                </MenuItem>
                <MenuItem backgroundColor="#2D2D2D" onClick={handleLogin}>
                  Login
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      )}

      {!user?.username && !isMobile && (
        <>
          <Button size="sm" onClick={handleRegister}>
            REGISTER
          </Button>
          <Button size="sm" onClick={handleLogin}>
            LOGIN
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
