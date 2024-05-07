import { useEffect, useRef } from 'react';
import { Screen } from '../Screen'
import styles from './style.module.scss'
import { screens } from '../../constants/screens';
import { useStateProvider } from '../../context/state';

const ScrollContainer = () => {
  const { updatePage } = useStateProvider();
  const pages = useRef(null)


  const checkCenter = () => {
    if (pages.current) {
      const children = (pages.current as any).children
      for (let i = 0; i < children.length; i++) {
        const ref = children[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;


          const isElementCentered = rect.top < windowHeight / 2 && rect.top > -windowHeight / 2;
          if (isElementCentered) {
            updatePage(screens[i].id)
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
        <Screen key={index} id={screen.id} component={screen.component} imageUrl={screen.imageUrl} />
      ))}
    </div>
  );
};

export default ScrollContainer;
