import React, { useMemo } from 'react';
import useLocalState from './hooks/useLocalState';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeContextProvider } from './context/themeContext';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useLocalState('theme', 'light');

  const currentThemeProps = useMemo(() => (themes[theme] || themes.dark), [theme]);
  
  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContextProvider 
      onToggleTheme={handleToggleTheme}
      themeStatus={theme}
      themeProps={currentThemeProps}
    >
      <GlobalStyle />
      <Layout />
    </ThemeContextProvider>
  );
};

export default App;
