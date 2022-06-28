import React, { useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(themeContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}