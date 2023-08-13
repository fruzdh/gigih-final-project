import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const RegisterLoginContext = createContext();

const RegisterLoginProvider = () => {
  const [isOpen, setOpen] = useLocalStorage("modal-state", false);
  const [isRegister, setRegister] = useLocalStorage(
    "modal-content-state",
    false
  );

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onRegister = () => setRegister(true);
  const onLogin = () => setRegister(false);

  return (
    <RegisterLoginContext.Provider
      value={{ isOpen, onOpen, onClose, isRegister, onRegister, onLogin }}
    />
  );
};

export { RegisterLoginContext, RegisterLoginProvider };
