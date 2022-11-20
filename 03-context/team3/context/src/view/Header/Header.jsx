import { useContext } from 'react';
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { LanguageContext } from '../../contexts/LanguagesContext';


const Header = () => {

    const darkModeDate = useContext(DarkModeContext)
    const currentLanguageData = useContext(LanguageContext)
    // console.log(isDarkMode);

  return (
    <>
      <button onClick={darkModeDate.toggleIsDarkMode}>Dark mode / Light mode</button>
      <button onClick={()=>currentLanguageData.setLanguage("pl")}>PL</button>
      <button onClick={()=>currentLanguageData.setLanguage("en")}>EN</button>

    </>
  );
};

export default Header;

