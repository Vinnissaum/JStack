import React, { useState, createContext } from 'react';

export const themeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  
  const handleToggleTheme = () => {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <themeContext.Provider
      value={
        {
          theme,
          onToggleTheme: handleToggleTheme,
        }
      }
    >
      {props.children}
    </themeContext.Provider>
  );
}