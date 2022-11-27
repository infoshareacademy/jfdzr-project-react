import { useContext } from "react";
import { languageData } from "../../languageData";
import { DarkModeContext } from "./contexts/LanguageContext/DarkModeContext";
import styles from "./Component.module.css";

const Comp = () => {
  const isDarkMode = useContext(DarkModeContext);

  return (
    <h1 className={isDarkMode ? styles.darkModeClass : styles.lightModeClass}>
      {languageData["pl"].new}
    </h1>
  );
};

export default Comp;
