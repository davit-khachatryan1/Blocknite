import { useEffect, useRef, useState } from 'react';
import { Screen } from '../Screen'
import styles from './style.module.scss'
import { screens } from '../../constants/screens';
import { useStateProvider } from '../../context/state';
import { Footer } from '../Footer';

const ScrollContainer = () => {
  const { updatePage, setScrolling, setWindowSize } = useStateProvider();
  const pages = useRef(null)


  const checkCenter = () => {
    if (pages.current) {
      const children = (pages.current as any).children

      for (let i = 0; i < children.length; i++) {
        const ref = children[i];
        if (ref && children[i]?.id == (window as any)["pageValue"]) {
          const rect = ref.getBoundingClientRect();
          const isElementCentered = rect.top < window.innerHeight / 2 && rect.top > -window.innerHeight / 2;
          if (isElementCentered) {
            setTimeout(() => {
              setScrolling(false);
              (window as any)["scrolling"] = false;
            }, 800)
          }
        }
        if (!(window as any)["scrolling"]) {
          const rect = ref.getBoundingClientRect();

          const isElementCentered = rect.top < window.innerHeight / 2 && rect.top > -window.innerHeight / 2;
          if (isElementCentered && screens[i]?.id) {
            setTimeout(() => {
              updatePage(screens[i].id, false)
            }, 200)
          }
        }
      }
    }
  }


  const onResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    window.addEventListener("scroll", checkCenter);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", onResize);
    };
  }, [])

  return (
    <div className={styles.container} ref={pages}>
      {screens.map((screen, index) => (
        <Screen key={index} id={screen.id} component={screen.component} imageUrl={screen.imageUrl} mobileImage={screen.imageMobile} />
      ))}
      <Footer />
    </div>
  );
};

export default ScrollContainer;
