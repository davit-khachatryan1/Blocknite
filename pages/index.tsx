import { StateProvider } from '@/context/state';
import { lazy } from 'react';
import styles from "@/styles/Home.module.scss";
import useWindowSize from '@/utils/hooks/useWindowSize';
import ScrollContainer from '@/components/ScrollContainer';
import NavBar from '@/components/NavBar';

export default function Home() {
  const {windowWidth} = useWindowSize();
  return (
    <div>
      <StateProvider>
        <ScrollContainer windowWidth={windowWidth}/>
        <div className={styles.navbar}>
          <NavBar />
        </div>
      </StateProvider>
    </div>
  );
}
