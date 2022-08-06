import { useContext, createContext, useState } from 'react';

const themeContext = createContext('light');

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState('light');

    return(
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    return (
        useContext(themeContext)
    )
}