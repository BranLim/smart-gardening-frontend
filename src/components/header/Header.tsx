import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <div className={styles.Header} data-testid="Header">
    Header Component
  </div>
);

export default Header;
