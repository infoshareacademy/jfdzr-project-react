import GamingImage from "../../ArticleSection/GamingImage/Images";
import RetroImage from "../../ArticleSection/RetroImage/RetroImage";
import TopImage from "../../ArticleSection/TopImage/TopImage";
import { languageData } from "../../languageData";
import { LanguageContext } from "../Container";
import { useContext } from "react";

function ArticleSection() {
  const currentLanguageData = useContext(LanguageContext);
  return (
    <div>
      <article>
        <GamingImage />
        <h1>01</h1>
        <h2>{languageData[currentLanguageData.language].revivingRetroPCs}</h2>
        <p>
          {
            languageData[currentLanguageData.language]
              .whatHappensWhenOldPCsAreGivenModernUpgrades
          }
        </p>
      </article>
      <article>
        <RetroImage />
        <h1>02</h1>
        <h2>{languageData[currentLanguageData.language].top10LaptopsOf2022}</h2>
        <p>
          {
            languageData[currentLanguageData.language]
              .ourBestPicksForVariousNeedsAndBudgets
          }
        </p>
      </article>
      <article>
        <TopImage />
        <h1>03</h1>
        <h2>{languageData[currentLanguageData.language].theGrowthOfGaming}</h2>
        <p>
          {
            languageData[currentLanguageData.language]
              .howThePandemicHasSparkedFreshOpportunities
          }
        </p>
      </article>
    </div>
  );
}

export default ArticleSection;
