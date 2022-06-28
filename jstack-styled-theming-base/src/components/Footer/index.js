import React, { useContext } from 'react';
import { themeContext } from '../../context/themeContext';
import { Container } from './styles';

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useContext(themeContext);
  
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
       type="button"
       onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}