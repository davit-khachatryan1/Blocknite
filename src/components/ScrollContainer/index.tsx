import { useEffect, useRef } from 'react';
import { Screen } from '../Screen'
import styles from './style.module.scss'
import { screens } from '../../constants/screens';
import { useStateProvider } from '../../context/state';
import { useNavigate } from 'react-router-dom';

const ScrollContainer = () => {
  const navigate = useNavigate();
  const { updatePage, fromPage } = useStateProvider();
  const pages = useRef(null)


  const checkCenter = () => {
    // setTimeout(() => {
    //   if (pages.current && !fromPage) {
    //     const children = (pages.current as any).children
    //     for (let i = 0; i < children.length; i++) {
    //       const ref = children[i];
    //       if (ref) {
    //         const rect = ref.getBoundingClientRect();
    //         const windowHeight = window.innerHeight || document.documentElement.clientHeight;


    //         const isElementCentered = rect.top < windowHeight / 2 && rect.top > -windowHeight / 2;
    //         if (isElementCentered) {
    //           updatePage(screens[i].id, navigate)
    //         }
    //       }
    //     }
    //   }
    // }, 500)
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
        <Screen key={index} id={screen.id} component={screen.component} />
      ))}
    </div>
  );
};

export default ScrollContainer;
