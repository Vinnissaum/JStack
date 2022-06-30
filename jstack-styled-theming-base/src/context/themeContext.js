import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

export const themeContext = createContext();

export function ThemeContextProvider(
  { children, 
    onToggleTheme, 
    themeStatus, 
    themeProps 
  }) {  
  return (
    <themeContext.Provider
     value={
      { 
        onToggleTheme,
        selectedTheme: themeStatus,
      }
     }   
    >
      <ThemeProvider theme={themeProps}>
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  );
}