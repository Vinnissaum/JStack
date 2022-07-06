import React, { createContext } from 'react';

import themes from '../styles/themes';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    let theme = 'light';
    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (e) {
      console.log(e);
    }
    this.state = {
      theme,
    };
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }), () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    });
  }
  
  render() {
    const { theme } = this.state;
    const currentThemeProps = (themes[theme] || themes.light);

    return(
      <ThemeContext.Provider value={
        {
          selectedTheme: theme,
          onToggleTheme: this.handleToggleTheme,
          currentThemeProps,
        }
      }
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// export function ThemeProvider({ children }) { 
//   const [theme, setTheme] = useState('light');
  
//   function handleToggleTheme() {
//       setTheme(prevState => ( prevState === 'dark' ? 'light' : 'dark' ));
//   }

//   const currentThemeProps = (themes[theme] || themes.light);
//   return (
//     <ThemeContext.Provider
//      value={
//       { 
//         selectedTheme: theme,
//         onToggleTheme: handleToggleTheme,
//         currentThemeProps
//       }
//      }   
//     >
//       { children }
//     </ThemeContext.Provider>
//   );
// }