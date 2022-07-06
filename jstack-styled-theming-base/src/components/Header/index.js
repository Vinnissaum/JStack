import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Container } from './styles';

export default class Header extends React.Component {

  render() {
    return(
      <ThemeContext.Consumer>
        {({ selectedTheme, onToggleTheme }) => (
          <Container>
          <h1>JStack's Blog</h1>
          <button 
            type="button"
            onClick={onToggleTheme}
          >
            {selectedTheme === 'dark' ? '🌞' : '🌚'}
          </button>
        </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// export default function Header() {
//   const { onToggleTheme, selectedTheme } = useContext(ThemeContext);
  
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button 
//         type="button"
//         onClick={onToggleTheme}
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }