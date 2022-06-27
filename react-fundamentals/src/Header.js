import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { themeContext } from './ThemeContext';
import Button from './Button';

import styles from './Header.scss';

export default function Header(props) {
  const { onToggleTheme } = useContext(themeContext);

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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