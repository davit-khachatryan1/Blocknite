import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss'

export const Screen = ({ id, component, imageUrl, mobileImage }: any) => {
  const imageRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0)

  return <div style={{
    width: '100%',
    position: 'relative',
    display: 'flex',
    maxHeight: elementHeight || 'auto'
  }}
    className={styles.container}
    id={id}
  >
    <img src={imageUrl} className={styles.bgImage} alt='main-bg' ref={imageRef} onLoad={(e) => {
      const height = imageRef?.current ? (imageRef?.current as any).offsetHeight : 0;
      setElementHeight(height)
    }} />
    <img src={mobileImage} className={styles.bgMobile} alt='main-bg' />
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 1
    }}>
      {component}
    </div>
  </div>;
};