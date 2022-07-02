import React, { createContext, useState } from 'react';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) { 
  const [theme, setTheme] = useState('light');
  
  function handleToggleTheme() {
      setTheme(prevState => ( prevState === 'dark' ? 'light' : 'dark' ));
    }

  const currentThemeProps = (themes[theme] || themes.light);
  return (
    <ThemeContext.Provider
     value={
      { 
        selectedTheme: theme,
        onToggleTheme: handleToggleTheme,
        currentThemeProps
      }
     }   
    >
      { children }
    </ThemeContext.Provider>
  );
}