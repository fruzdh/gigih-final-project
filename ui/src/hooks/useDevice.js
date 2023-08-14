import { useContext } from "react";
import { DeviceContext } from "../context/device";

const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("must be used within a DeviceContext");
  }

  return context;
};

export default useDevice;
