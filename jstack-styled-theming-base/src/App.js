import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeContextProvider } from './context/themeContext';
import themes from './styles/themes';

class App extends React.Component {
  state = {
    theme: 'dark'
  };

  handleToggleTheme = () => {
    this.setState(prevState => (
      {
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      }
    ));
    }

  render() {
    const { theme } = this.state;
    const currentThemeProps = (themes[theme] || themes.dark);
    
    return (
      <ThemeContextProvider 
        onToggleTheme={this.handleToggleTheme}
        themeStatus={theme}
        themeProps={currentThemeProps}
      >
        <GlobalStyle />
        <Layout />
      </ThemeContextProvider>
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
