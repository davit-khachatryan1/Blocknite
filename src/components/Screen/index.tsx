import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';

export const Screen = ({ id, component, imageUrl, mobileImage }: any) => {
  const { windowWidth } = useStateProvider()
  const imageRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0)

  useEffect(() => {
    if (windowWidth && imageRef?.current) {
      setElementHeight((imageRef?.current as any).offsetHeight)
    }
  }, [windowWidth])

  return <div style={{
    width: '100%',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${windowWidth <= 576 ? mobileImage : imageUrl})`
  }}
    className={styles.container}
    id={id}
  >
    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2
    }}>
      {component}
    </div>
  </div>;
};