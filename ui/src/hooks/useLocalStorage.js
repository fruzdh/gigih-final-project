import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = "") => {
  const [state, setState] = useState(() => {
    const value = window.localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        window.localStorage.removeItem(key);
      }
    }

    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
