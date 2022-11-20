import NewsSection from "./NewsSection/NewsSection";
import ArticleSection from "./ArticleSection/ArticleSection";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

function Container() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
      <MainSection />
      <NewsSection />
      <ArticleSection />
    </LanguageContext.Provider>
  );
}

export default Container;
