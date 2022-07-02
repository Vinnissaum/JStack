import React, { useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, theme } = useContext(themeContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}