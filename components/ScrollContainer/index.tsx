import { lazy, memo, useEffect, useRef, useCallback } from 'react';
import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';
import { screens } from '../../constants/screens';
import useWindowSize from '@/utils/hooks/useWindowSize';

import Screen from "../Screen";
import Footer from "../Footer";

const ScrollContainer = () => {
  const { updatePage, setScrolling } = useStateProvider();
  const pages = useRef<HTMLDivElement | null>(null);
  const { windowWidth } = useWindowSize()


  const checkCenter = useCallback(() => {
    const screensValue = screens(windowWidth);
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
          if (isElementCentered && screensValue[i]?.id) {
            setTimeout(() => {
              updatePage(screensValue[i].id, false);
            }, 200);
          }
        }
      }
    }
  }, [setScrolling, updatePage, windowWidth]);


  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener("scroll", checkCenter);

  //     return () => {
  //       window.removeEventListener("scroll", checkCenter);
  //     };
  //   }
  // }, []);

  return (
    <div className={styles.container} ref={pages}>
      {screens(windowWidth).map((screen, index) => (
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
