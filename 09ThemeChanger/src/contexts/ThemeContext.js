import { createContext,useContext } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = ThemeContext.Provider;

const useThemeContext = ()=>{
    return useContext(ThemeContext);
}

export default useThemeContext;