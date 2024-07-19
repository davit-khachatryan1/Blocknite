import dynamic from 'next/dynamic';
import styles from './style.module.scss';
import { CSSProperties, memo, useMemo } from 'react';

const ParticleCanvas = dynamic(() => import("../Particles"));

interface ScreenProps {
  id: string;
  component: React.ReactNode;
  imageUrl: string;
  mobileImage: string;
  screen?: any;
  windowWidth: number
}

const Screen: React.FC<ScreenProps> = ({ id, component, imageUrl, mobileImage, screen, windowWidth }) => {

  const containerStyle: CSSProperties = useMemo(() => ({
    width: '100%',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    ...(windowWidth ? { backgroundImage: `url(${windowWidth <= 576 ? mobileImage : imageUrl})` } : {})
  }), [windowWidth, mobileImage, imageUrl]);

  const fullScreenStyle: CSSProperties = useMemo(() => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  }), []);

  const contentStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }), []);
  
  return (
    <div style={containerStyle} className={styles.container} id={id}>
        <div style={fullScreenStyle} >
          {windowWidth && screen?.mobile && <ParticleCanvas id={id} {...(windowWidth <= 576 ? screen.mobile : screen.desktop)}  windowWidth={windowWidth}/>}
        </div>
      <div style={contentStyle}>
        {component}
      </div>
    </div>
  );
};

export default memo(Screen);