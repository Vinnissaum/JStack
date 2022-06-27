import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from '../../context/ThemeContext';
import Button from '../Button';
import { Title } from '../Title';

export default function Header(props) {
  const { onToggleTheme } = useContext(themeContext);

  return (
    <>
      <Title>{props.title}</Title>
      {props.children}
      <Button 
        onClick={onToggleTheme}
      >
        Toggle Theme
      </Button>
    </>
  ); 
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: "JStack's Blog",
}