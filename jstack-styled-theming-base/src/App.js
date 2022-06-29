import React from 'react';
import useLocalState from './hooks/useLocalState';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeContextProvider } from './context/themeContext';
import themes from './styles/themes';

function App() {
  return (
    <ThemeContextProvider>
        <GlobalStyle />
        <Layout />
    </ThemeContextProvider>
  );
};

export default App;
