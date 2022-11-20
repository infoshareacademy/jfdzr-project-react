import { createContext, useState } from 'react'

export const DarkModeContext = createContext({
    isDarkMode: false,
    toggleIsDarkMode:()=> {}
})

export const DarkModeContextProvider = ({children}) => {
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleIsDarkMode = () => {
    setIsDarkMode((prev) => !prev);

}

const mode ={
    isDarkMode,
    toggleIsDarkMode,
}

  return (
    <DarkModeContext.Provider value={mode}>
    {children}
    </DarkModeContext.Provider>)
  }
