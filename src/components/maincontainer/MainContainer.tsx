import React from 'react';
import Pump from '../pump/Pump';
import styles from './MainContainer.module.css';

const MainContainer: React.FC = () => (
  <div className={styles.MainContainer} data-testid="MainContainer">
      <Pump/>
  </div>
);

export default MainContainer;
