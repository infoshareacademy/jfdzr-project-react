import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguagesContext";
import { languageData } from "../../languageData";
import picture from "./desktop-design.jpg";

const MainContent = () => {
  const { language } = useContext(LanguageContext);
  console.log(language);
  return (
    <div>
      <img alt="main" src="https://raw.githubusercontent.com/infoshareacademy/jfdzr8-project-react/main/03-context/assets/images/image-web-3-desktop.jpg" />
      <h1>{languageData[language].theBrightFutureOfWeb3}</h1>
      <p>{languageData[language].weDiveIntoTheNextEvolutionOfTheWeb}</p>
      <button>{languageData[language].readMore}</button>
    </div>
  );
};

export default MainContent;
