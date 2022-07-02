import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import GlobalStyle from './styles/global';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ currentThemeProps }) => (
            <StyledThemeProvider theme={ currentThemeProps }>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
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
