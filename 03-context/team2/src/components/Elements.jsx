import { ModeContext } from "./Root"
import { LanguageContext } from "./Root"
import { useContext } from "react"
import { languageData } from "../languageData"
import image from "./image-web-3-desktop.jpg"
import styles from "./Elements.module.css"
import gamingImg from "../../../assets/images/image-gaming-growth.jpg"
import retroImg from "../../../assets/images/image-retro-pcs.jpg"
import laptopsImg from "../../../assets/images/image-top-laptops.jpg"



export const Mode = ({toggle}) => {
    const themeLanguage = useContext(LanguageContext)
    const themeMode = useContext(ModeContext)
    const language = themeLanguage.isEN ? "en" : "pl"
    const dark = themeMode.isDark

    return(
        <div>
            <button onClick={()=>{toggle(!dark)}}>{!dark ? languageData[language].lightMode : languageData[language].darkMode}</button>
        </div>
    )

}

export const Language = ({toggle}) => {
    const themeLanguage = useContext(LanguageContext)
    const themeMode = useContext(ModeContext)
    const language = themeLanguage.isEN ? "en" : "pl"
    const dark = themeMode.isDark

    return(
        <div>
            <button onClick={()=>{toggle(!themeLanguage.isEN)}}>{language}</button>
        </div>
    )

}

export const News = () => {
    const themeLanguage = useContext(LanguageContext)
    const themeMode = useContext(ModeContext)
    const language = themeLanguage.isEN ? "en" : "pl"
    const dark = themeMode.isDark
    return(
        <div className={`news ${dark ? "newsDark" : "newsLight"}`}>          
            <h2>{languageData[language].new}</h2>
            <ul>
                <li>
                    <h3>{languageData[language].hydrogenVsElectricCars}</h3>
                    <p>{languageData[language].willHydrogenFueledCarsEverCatchUpToEVs}</p>
                </li>
                <li>
                    <h3>{languageData[language].theDownsidesOfAiArtistry}</h3>
                    <p>{languageData[language].whatAreThePossibleAdverseEffectsOfOnDemandAiImageGeneration}</p>
                </li>
                <li>
                    <h3>{languageData[language].isVCFundingDryingUp}</h3>
                    <p>{languageData[language].privateFundingByVCFirmsIsDown50YOYWeTakeALookAtWhatThatMeans}</p>
                </li>
            </ul>
        </div>
        
    )
}

export const Main = () => {
    const theme = useContext(LanguageContext)
    const theme2 = useContext(ModeContext)
    const language = theme.isEN ? "en" : "pl"
    const dark = theme2.isDark

    return (
        <div className={`main ${dark ? "mainDark" : "mainLight"}`}>
        <img src={image} className={styles.mainimage}/>
        <div><h1 className={styles.header}>{languageData[language].theBrightFutureOfWeb3}</h1></div>
        <div>
        <p>{languageData[language].weDiveIntoTheNextEvolutionOfTheWeb}</p>
        <button>{languageData[language].readMore}</button>
        </div>
        </div>

    )

    
}

export const Article = () => {
    const theme = useContext(LanguageContext)
    const theme2 = useContext(ModeContext)
    const language = theme.isEN ? "en" : "pl"
    const dark = theme2.isDark

    return (
            <ul className={styles.article}>
                <li>
                    <img src={retroImg} alt="retro" />
                    <div>
                        <p>01</p>
                        <h3>{languageData[language].revivingRetroPCs}</h3>
                        <p>{languageData[language].whatHappensWhenOldPCsAreGivenModernUpgrades}</p>
                    </div>
                </li>
                <li>
                    <img src={laptopsImg} alt="laptop" />
                    <div>
                        <p>02</p>
                        <h3>{languageData[language].top10LaptopsOf2022}</h3>
                        <p>{languageData[language].ourBestPicksForVariousNeedsAndBudgets}</p>
                    </div>
                </li>
                <li>
                    <img src={gamingImg} alt="gaming" />
                    <div>
                        <p>03</p>
                        <h3>{languageData[language].theGrowthOfGaming}</h3>
                        <p>{languageData[language].howThePandemicHasSparkedFreshOpportunities}</p>
                    </div>
                </li>
            </ul>
    )

}
