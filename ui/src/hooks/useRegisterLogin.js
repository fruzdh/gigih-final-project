import { useContext } from "react";
import { RegisterLoginContext } from "../context/registerLogin";

const useRegisterLogin = () => {
  const context = useContext(RegisterLoginContext);
  if (!context) {
    throw new Error("must be used within a RegisterLoginContext");
  }

  return context;
};

export default useRegisterLogin;
