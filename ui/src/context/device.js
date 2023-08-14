import { useMediaQuery } from "@chakra-ui/react";
import { createContext } from "react";

const DeviceContext = createContext();

const DeviceProvider = (props) => {
  const [isMaxOneVideo] = useMediaQuery("(max-width: 669px)");
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <DeviceContext.Provider
      value={{ isMaxOneVideo, isTablet, isMobile }}
      {...props}
    />
  );
};

export { DeviceContext, DeviceProvider };
