import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

type ThemeName = 'light' | 'dark';

interface ThemeContextProps {
  themeName: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('@portfolio:theme') as ThemeName;
    if (savedTheme) {
      setThemeName(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    localStorage.setItem('@portfolio:theme', newTheme);
  };

  const theme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
