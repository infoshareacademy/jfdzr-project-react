import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguagesContext";
import { languageData } from "../../languageData";

const News = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h2>{languageData[language].new}</h2>
      <h4>{languageData[language].hydrogenVsElectricCars}</h4>
      <p>{languageData[language].willHydrogenFueledCarsEverCatchUpToEVs}</p>
      <h4>{languageData[language].theDownsidesOfAiArtistry}</h4>
      <p>
        {
          languageData[language]
            .whatAreThePossibleAdverseEffectsOfOnDemandAiImageGeneration
        }
      </p>
      <h4>{languageData[language].isVCFundingDryingUp}</h4>
      <p>
        {
          languageData[language]
            .privateFundingByVCFirmsIsDown50YOYWeTakeALookAtWhatThatMeans
        }
      </p>
    </div>
  );
};

export default News;
