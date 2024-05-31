import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';
import { CSSProperties, lazy, memo, useEffect, useMemo, useState } from 'react';

const ParticleCanvas = lazy(() => import("../Particles"));

interface ScreenProps {
  id: string;
  component: React.ReactNode;
  imageUrl: string;
  mobileImage: string;
  screen?: any;
}

const Screen: React.FC<ScreenProps> = ({ id, component, imageUrl, mobileImage, screen }) => {
  const { windowWidth } = useStateProvider();
  const [showParticles, setShowParticles] = useState(true);

  const containerStyle: CSSProperties = useMemo(() => ({
    width: '100%',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: `url(${windowWidth <= 576 ? mobileImage : imageUrl})`
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

  useEffect(() => {
    if (windowWidth && showParticles) {
      setShowParticles(false);
      const timeout = setTimeout(() => {
        setShowParticles(true);
        clearTimeout(timeout)
      }, 100)
    }
  }, [windowWidth])

  return (
    <div style={containerStyle} className={styles.container} id={id}>
      {showParticles && screen?.spaces && (
        <div style={fullScreenStyle}>
          <ParticleCanvas {...screen} />
        </div>
      )}
      <div style={contentStyle}>
        {component}
      </div>
    </div>
  );
};

export default memo(Screen);