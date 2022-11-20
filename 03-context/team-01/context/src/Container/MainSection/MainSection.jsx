import MainImage from "./MainImage/MainImage.jsx";
import { languageData } from "../../languageData";
import { LanguageContext } from "../Container";
import { useContext } from "react";
function MainSection() {
  const currentLanguageData = useContext(LanguageContext);
  return (
    <>
      <div>
        <MainImage />
      </div>

      <article>
        <h1>
          {languageData[currentLanguageData.language].theBrightFutureOfWeb3}
        </h1>
      </article>

      <article>
        <p>
          {
            languageData[currentLanguageData.language]
              .weDiveIntoTheNextEvolutionOfTheWeb
          }
        </p>
        <button>{languageData[currentLanguageData.language].readMore}</button>
      </article>
    </>
  );
}

export default MainSection;
