import { useContext } from "react";
import { AuthContext } from "../context/auth";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("must be used within a AuthProvider");
  }

  return context;
};

export default useAuth;
