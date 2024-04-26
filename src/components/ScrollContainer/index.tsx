import React, { useState, useEffect } from 'react';
import {Screen} from '../Screen'
import { MainScreen } from '../MainScreen';
import { SecondScreen } from '../SecondScreen';
import { ThirdScreen } from '../ThirdScreen';
import { FourthScreen } from '../FourthScreen';
import { FifthScreen } from '../FifthScreen';
import { SixthScreen } from '../SixthScreen';
import styles from './style.module.scss'

const ScrollContainer = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define your screens here
  const screens = [
    { color: 'blue', text: 'Screen 1', component: <MainScreen/> },
    { color: 'black', text: 'Screen 2', component: <SecondScreen/> },
    { color: 'green', text: 'Screen 3', component: <ThirdScreen/> },
    { color: 'yellow', text: 'Screen 4', component: <FourthScreen/> },
    { color: 'gray', text: 'Screen 5', component: <FifthScreen/> },
    { color: 'red', text: 'Screen 6', component: <SixthScreen/> },
  ];

  return (
    <div style={{ height: `${100 * screens.length}vh` }} className={styles.container}>
      {screens.map((screen, index) => (
        <Screen key={index} color={screen.color} text={screen.text} scrollY={scrollY - (index - 1) * window.innerHeight} component={screen.component} />
      ))}
    </div>
  );
};

export default ScrollContainer;
