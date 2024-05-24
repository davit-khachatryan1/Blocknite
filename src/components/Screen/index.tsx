import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';
import ParticleCanvas, { Point } from '../Particles';

export const Screen = ({ id, component, imageUrl, mobileImage, screen }: any) => {
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
    {screen.spaces &&
      <div style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0
      }}
      >
        <ParticleCanvas
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
          noVisible={screen.noVisible}
        />
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