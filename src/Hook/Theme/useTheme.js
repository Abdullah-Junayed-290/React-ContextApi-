import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
})

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme;