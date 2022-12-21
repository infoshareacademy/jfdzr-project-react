import { createContext, ReactNode, useState } from "react";

interface DarkModeContextData {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextData>({
  isDarkMode: false,
  toggleDarkMode: () => undefined,
});

interface DarkModeContextProviderProps {
  children: ReactNode;
}

const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((currentIsDarkMode) => !currentIsDarkMode);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
