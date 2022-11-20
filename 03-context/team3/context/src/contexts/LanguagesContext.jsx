import { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "pl",
  setCurrentLanguage: (currentLanguage) => {},
});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("pl");

  const setCurrentLanguage = (currentLanguage) => {
    setLanguage(currentLanguage);
    console.log(currentLanguage);
  };

  const value = {
    setCurrentLanguage,
    language,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
