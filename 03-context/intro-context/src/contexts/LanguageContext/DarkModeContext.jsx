import { createContext, useState } from "react";

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},
});

export const DarkModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIsDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleIsDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
