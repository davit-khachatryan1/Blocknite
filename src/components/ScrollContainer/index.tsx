import { useEffect, useRef, useState } from 'react';
import { Screen } from '../Screen'
import styles from './style.module.scss'
import { screens } from '../../constants/screens';
import { useStateProvider } from '../../context/state';
import { Footer } from '../Footer';

const ScrollContainer = () => {
  const { updatePage } = useStateProvider();
  const [resize, setOnResize] = useState(1);
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
          if (isElementCentered && screens[i]?.id) {
            updatePage(screens[i].id)
          }
        }
      }
    }
  }

  const onResize = () => {
    if (resize && resize != window.innerWidth) {
      setOnResize(0)
      setTimeout(() => {
        setOnResize(window.innerWidth)
      }, 100)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkCenter);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", onResize);
    };
  }, [])

  return (
    <div className={styles.container} ref={pages}>
      {resize && screens.map((screen, index) => (
        <Screen key={index} id={screen.id} component={screen.component} imageUrl={screen.imageUrl} mobileImage={screen.imageMobile} />
      ))}
      <Footer />
    </div>
  );
};

export default ScrollContainer;
