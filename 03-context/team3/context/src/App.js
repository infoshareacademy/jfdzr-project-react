import {
  DarkModeContext,
  DarkModeContextProvider,
} from "./contexts/DarkModeContext";
import { LanguageContextProvider } from "./contexts/LanguagesContext";
import News from "./view/News/News";
import Header from "./view/Header/Header";
import MainContent from "./view/MainContent/MainContent.jsx";
import Articles from "./view/Articles/Articles";
import  "./App.css";
import { useContext } from "react";


function App() {
  const darkModeDate = useContext(DarkModeContext);

  return (

      <div className={darkModeDate.isDarkMode ? "darkMode" : "lightMode"}>
        <Header />
        <MainContent />
        <News />
        <Articles />
    </div>
  )
}

export default App;
