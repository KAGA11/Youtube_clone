import React, { createContext, ReactNode, useContext, useState } from 'react'

type ThemeContextType = {
    theme : string,
    changeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined);

type ThemeProviderType = {
    children : ReactNode
}

export const ThemeProvider:React.FC<ThemeProviderType> = ({ children }) => {
    const [ theme, setTheme ] = useState('dark')

    const changeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }


  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

// export const useTheme = ():ThemeContextType => useContext(ThemeContext)
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};