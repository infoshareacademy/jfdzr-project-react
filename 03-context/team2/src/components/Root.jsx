import { createContext } from 'react'
import { useState } from 'react'
import { Article, Language, Main, Mode, News } from './Elements'
import styles from './Root.module.css'

export const ModeContext = createContext()
export const LanguageContext = createContext()

export const Root = () => {
    const [isDark, setDark] = useState(false)
    const [isEN, setEN] = useState(false)
    const themes = {isDark}
    const themes2 = {isEN}

    return (
        <div className={styles.box}>
        <LanguageContext.Provider value={themes2}>
        <ModeContext.Provider value={themes}>
            <div className={styles.header}>
            <Mode toggle={setDark}/>
            <Language toggle={setEN}/>
            </div>
            <div className={styles.pack}>
            <Main />
            <News />
            </div>
            <Article />
        </ModeContext.Provider> 
        </LanguageContext.Provider>
        </div>
      )
    }
