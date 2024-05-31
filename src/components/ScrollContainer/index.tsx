import { lazy, memo, useEffect, useRef, useCallback } from 'react';
import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';
import { screens } from '../../constants/screens';

const Screen = lazy(() => import("../Screen"));
const Footer = lazy(() => import("../Footer"));

const ScrollContainer = () => {
  const { updatePage, setScrolling, setWindowSize } = useStateProvider();
  const pages = useRef<HTMLDivElement | null>(null);

  const checkCenter = useCallback(() => {
    if (pages.current) {
      const children = pages.current.children;

      for (let i = 0; i < children.length; i++) {
        const ref = children[i] as HTMLElement;
        if (ref && children[i]?.id === (window as any)["pageValue"]) {
          const rect = ref.getBoundingClientRect();
          const isElementCentered = rect.top < window.innerHeight / 2 && rect.top > -window.innerHeight / 2;
          if (isElementCentered) {
            setTimeout(() => {
              setScrolling(false);
              (window as any)["scrolling"] = false;
            }, 800);
          }
        }
        if (!(window as any)["scrolling"]) {
          const rect = ref.getBoundingClientRect();
          const isElementCentered = rect.top < window.innerHeight / 2 && rect.top > -window.innerHeight / 2;
          if (isElementCentered && screens[i]?.id) {
            setTimeout(() => {
              updatePage(screens[i].id, false);
            }, 200);
          }
        }
      }
    }
  }, [setScrolling, updatePage]);

  const onResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, [setWindowSize]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("scroll", checkCenter);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  
  return (
    <div className={styles.container} ref={pages}>
      {screens.map((screen, index) => (
        <Screen
          key={index}
          id={screen.id}
          component={screen.component}
          imageUrl={screen.imageUrl}
          mobileImage={screen.imageMobile}
          screen={screen}
        />
      ))}
      <Footer />
    </div>
  );
};

export default memo(ScrollContainer);
