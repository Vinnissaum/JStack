import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeController } from './context/themeContext';
import useLocalState from './hooks/useLocalState';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useLocalState('themeKey', 'light');

  const currentTheme = useMemo(() => (themes[theme] || themes.dark), [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeController 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}  
      >
        <GlobalStyle />
        <Layout />
      </ThemeController>
    </ThemeProvider>
  );
};

export default App;
