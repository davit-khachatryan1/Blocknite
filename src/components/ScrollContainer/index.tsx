import { useState, useEffect, useRef } from 'react';
import { Screen } from '../Screen'
import styles from './style.module.scss'
import { screens } from '../../constants/screens';
import { useStateProvider } from '../../context/state';
import { useNavigate } from 'react-router-dom';

const ScrollContainer = () => {
  const navigate = useNavigate();
  const { page, updatePage } = useStateProvider();
  const [scrollY, setScrollY] = useState(0);
  const pages = useRef(null)

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkCenter = () => {
    console.log(pages);
    if (pages.current) {
      const children = (pages.current as any).children
      for (let i = 0; i < children.length; i++) {
        const ref = children[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          const center = rect.top + rect.height / 2;


          const isElementCentered = rect.top < windowHeight / 2 && rect.top > -windowHeight / 2;
          if (isElementCentered) {
            updatePage(screens[i].id, navigate)
          }
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkCenter);
    return () => {
      window.removeEventListener("scroll", checkCenter);
    };
  }, [])

  return (
    <div className={styles.container} ref={pages}>
      {screens.map((screen, index) => (
        <Screen key={index} id={screen.id} scrollY={scrollY - (index - 1) * window.innerHeight} component={screen.component} />
      ))}
    </div>
  );
};

export default ScrollContainer;
