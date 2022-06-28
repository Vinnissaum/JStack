import React, { createContext } from 'react';

export const themeContext = createContext();

export function ThemeController( props ){
  return (
    <themeContext.Provider
      value={
        {
          onToggleTheme: props.onToggleTheme,
          selectedTheme: props.selectedTheme
        }
      }
    >
      {props.children}
    </themeContext.Provider>
  );
}