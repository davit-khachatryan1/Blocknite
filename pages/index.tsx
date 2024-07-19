import { StateProvider } from '@/context/state';
import styles from "@/styles/Home.module.scss";
import useWindowSize from '@/utils/hooks/useWindowSize';
import dynamic from 'next/dynamic';

const ScrollContainer = dynamic(() => import('@/components/ScrollContainer'));
const NavBar = dynamic(() => import('@/components/NavBar'));

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
