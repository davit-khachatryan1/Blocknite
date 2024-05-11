import { useRef } from 'react';
import styles from './style.module.scss'

export const Screen = ({ id, component, imageUrl, mobileImage }: any) => {
  const imageRef = useRef(null);
  console.log(imageRef?.current ? (imageRef?.current as any).offsetHeight : 'auto');
  
  return <div style={{
    width: '100%',
    position: 'relative',
    display: 'flex',
    maxHeight: imageRef?.current ? (imageRef?.current as any).offsetHeight : 'auto'
  }}
    className={styles.container}
    id={id}
  >
    <img src={imageUrl} className={styles.bgImage} alt='main-bg' ref={imageRef}/>
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