import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useRegisterLogin from "../../hooks/useRegisterLogin";
import useAsync from "../../hooks/useAsync";
import axiosApiInstance from "../../utils/axios";

const {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  Text,
} = require("@chakra-ui/react");

const RegisterLoginModal = () => {
  const { registerLogin } = useAuth();
  const { isOpen, onClose, isRegister } = useRegisterLogin();
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileColor, setProfileColor] = useState("#51C9CD");

  const { isLoading, isSuccess, isError, reset, run, error } = useAsync({
    data: {},
  });

  const handleSubmit = () => {
    const payload = {
      username: username,
      password: password,
    };
    let endpoint = "";

    if (isRegister) {
      payload.profileColor = profileColor;
      endpoint = "register";
    } else {
      endpoint = "login";
    }

    run(
      axiosApiInstance.post(endpoint, payload).then((res) => {
        registerLogin(res.data);

        return res.data;
      })
    );
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setShow(false);
      setUsername("");
      setPassword("");
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="#2D2D2D"
        textColor="white"
        border="1px solid var(--chakra-colors-appBlue-light)"
        boxShadow="0 0 8px var(--chakra-colors-appBlue-light)"
      >
        <ModalHeader>{isRegister ? "Register" : "Login"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl size="sm" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="sm"
                borderRadius="20px"
                _focus={{
                  borderColor: "appBlue.light",
                  boxShadow: "0 0 4px var(--chakra-colors-appBlue-light)",
                }}
              />
            </FormControl>
            <FormControl my="10px" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="sm">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  borderRadius="20px"
                  _focus={{
                    borderColor: "appBlue.light",
                    boxShadow: "0 0 4px var(--chakra-colors-appBlue-light)",
                  }}
                />
                <InputRightElement w="4.5rem">
                  <Button
                    borderRightRadius="20px"
                    borderLeftRadius="0"
                    w="100%"
                    size="sm"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {isRegister && (
              <FormControl size="sm" isRequired>
                <FormLabel>Profile Color</FormLabel>
                <Input
                  type="color"
                  value={profileColor}
                  onChange={(e) => setProfileColor(e.target.value)}
                  size="sm"
                  borderRadius="20px"
                  _focus={{
                    borderColor: "appBlue.light",
                    boxShadow: "0 0 4px var(--chakra-colors-appBlue-light)",
                  }}
                />
              </FormControl>
            )}
          </form>

          {isError && (
            <Text mt="10px">
              error:{" "}
              {error?.response?.data ? error?.response?.data : error?.message}
            </Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            isDisabled={username.length === 0 || password.length === 0}
            isLoading={isLoading}
          >
            {isRegister ? "Register" : "Login"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterLoginModal;
