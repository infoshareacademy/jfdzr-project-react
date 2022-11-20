import { languageData } from "../../languageData";
import { LanguageContext } from "../Container";
import { useContext } from "react";

function NewsSection() {
  const currentLanguageData = useContext(LanguageContext);

  return (
    <>
      <h2>{languageData[currentLanguageData.language].new}</h2>
      <h3>
        {languageData[currentLanguageData.language].hydrogenVsElectricCars}
      </h3>
      <p>
        {
          languageData[currentLanguageData.language]
            .willHydrogenFueledCarsEverCatchUpToEVs
        }
      </p>
      <hr />
      <h3>
        {languageData[currentLanguageData.language].theDownsidesOfAiArtistry}
      </h3>
      <p>
        {
          languageData[currentLanguageData.language]
            .whatAreThePossibleAdverseEffectsOfOnDemandAiImageGeneration
        }
      </p>
      <hr />
      <h3>{languageData[currentLanguageData.language].isVCFundingDryingUp}</h3>
      <p>
        {
          languageData[currentLanguageData.language]
            .privateFundingByVCFirmsIsDown50YOYWeTakeALookAtWhatThatMeans
        }
      </p>
    </>
  );
}

export default NewsSection;
