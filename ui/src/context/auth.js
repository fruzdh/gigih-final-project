import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Cookies from "js-cookie";

const AuthContext = createContext({
  user: null,
  registerLogin: () => {},
  logout: () => {},
});

const AuthProvider = () => {
  const [user, setUser] = useLocalStorage("user-data");

  const registerLogin = (user_data) => {
    setUser({
      username: user_data.username,
      profile_color: user_data.profile_color,
    });
    Cookies.set("token", user_data.access_token);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
  };

  return <AuthContext.Provider value={{ user, registerLogin, logout }} />;
};

export { AuthContext, AuthProvider };
