import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from './ThemeContext';
import Button from './Button';

export default function Header(props) {
  const { onToggleTheme } = useContext(themeContext);

  return (
    <div style={
      {
        backgroundColor: '#CECECE',
        padding: 15,
        fontFamily: 'JetBrains Mono, sans-serif'
      }
    }>
      <h1>{props.title}</h1>
      {props.children}
      <Button 
        onClick={onToggleTheme}
      >
        Toggle Theme
      </Button>
    </div>
  ); 
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: "JStack's Blog",
}