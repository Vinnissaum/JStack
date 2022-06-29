import React, { useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';
import useLocalState from '../hooks/useLocalState';

export const themeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalState('theme', 'light');

  const currentTheme = useMemo(() => (themes[theme] || themes.dark), [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <themeContext.Provider
     value={
      { 
        onToggleTheme: handleToggleTheme,
        selectedTheme: theme,
      }
     }   
    >
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  );
}