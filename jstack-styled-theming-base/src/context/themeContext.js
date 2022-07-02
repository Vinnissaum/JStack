import React, { createContext, useState } from 'react';

import themes from '../styles/themes';

export const themeContext = createContext();

export function ThemeProvider({ children }) { 
  const [theme, setTheme] = useState('light');
  
  function handleToggleTheme() {
      setTheme(prevState => ( prevState === 'dark' ? 'light' : 'dark' ));
    }

  const currentThemeProps = (themes[theme] || themes.light);
  return (
    <themeContext.Provider
     value={
      { 
        theme,
        onToggleTheme: handleToggleTheme,
        selectedTheme: currentThemeProps
      }
     }   
    >
      { children }
    </themeContext.Provider>
  );
}