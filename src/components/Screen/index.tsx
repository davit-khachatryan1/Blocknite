import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';
import { lazy, memo } from 'react';

const ParticleCanvas = lazy(() => import("../Particles"));

const Screen = ({ id, component, imageUrl, mobileImage, screen }: any) => {
  const { windowWidth } = useStateProvider()

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
    {screen?.spaces &&
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0
      }}
      >
        {/* <ParticleCanvas
          spaces={
            screen.spaces
          }
          minParticles={screen.minParticles}
          maxParticles={screen.maxParticles}
          minSpeed={screen.minSpeed}
          maxSpeed={screen.maxSpeed}
          pointColors={screen.pointColors}
          pointMinSize={screen.pointMinSize}
          pointMaxSize={screen.pointMaxSize}
          movementDirection={screen.movementDirection}
          divade={screen.divade}
        /> */}
      </div>
    }

    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      {component}
    </div>
  </div>;
};

export default memo(Screen)