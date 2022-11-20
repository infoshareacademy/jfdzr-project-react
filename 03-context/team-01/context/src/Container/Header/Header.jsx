import { useContext } from "react";
import { languageData } from "../../languageData";
import { LanguageContext } from "../Container";
import styles from "./Header.module.css";
function Header() {
  const currentLanguageData = useContext(LanguageContext);

  return (
    <>
      <div>
        <button onClick={() => currentLanguageData.setLanguage("pl")}>
          PL
        </button>
        <p>/</p>
        <button onClick={() => currentLanguageData.setLanguage("en")}>
          EN
        </button>
      </div>
      <div>
        <button onClick={`${styles.onLightClick}`}>
          {languageData[currentLanguageData.language].lightMode}
        </button>
        <p>/</p>
        <button onClick={`${styles.onDarkClick}`}>
          {languageData[currentLanguageData.language].darkMode}
        </button>
      </div>
    </>
  );
}

export default Header;
