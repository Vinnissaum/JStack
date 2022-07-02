import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import { themeContext, ThemeProvider } from './context/themeContext';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

class App extends React.Component {
  state = {
    theme: 'dark'
  };

  render() {
    return (
      <ThemeProvider>
        <themeContext.Consumer>
          {({ selectedTheme }) => (
            <StyledThemeProvider theme={ selectedTheme }>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </themeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useLocalState('theme', 'light');

//   const currentThemeProps = useMemo(() => (themes[theme] || themes.dark), [theme]);
  
//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeContextProvider 
//       onToggleTheme={handleToggleTheme}
//       themeStatus={theme}
//       themeProps={currentThemeProps}
//     >
//       <GlobalStyle />
//       <Layout />
//     </ThemeContextProvider>
//   );
// };

export default App;
