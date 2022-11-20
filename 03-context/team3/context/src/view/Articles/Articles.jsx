import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguagesContext";
import { languageData } from "../../languageData";

const Articles = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <article>
        <img />
        <h2>01</h2>
        <h3>{languageData[language].revivingRetroPCs}</h3>
        <p>
          {languageData[language].whatHappensWhenOldPCsAreGivenModernUpgrades}
        </p>
      </article>
      <article>
        <img />
        <h2>02</h2>
        <h3>{languageData[language].top10LaptopsOf2022}</h3>
        <p>{languageData[language].ourBestPicksForVariousNeedsAndBudgets}</p>
      </article>
      <article>
        <img />
        <h2>03</h2>
        <h3>{languageData[language].theGrowthOfGaming}</h3>
        <p>
          {languageData[language].howThePandemicHasSparkedFreshOpportunities}
        </p>
      </article>
    </div>
  );
};

export default Articles;
