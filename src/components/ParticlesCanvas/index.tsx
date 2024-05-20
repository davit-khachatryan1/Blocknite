import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Ensure you have this package installed
import styles from './style.module.scss';


const ParticlesComponent = ({ index }: any) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: any = useMemo(() => ({
    fullScreen: {
      enable: false, // Disable the full screen fixed positioning
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#00ff00',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 5,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'right',
        outModes: {
          default: 'out',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
    retina_detect: true,
  }), []);

  return (
    <>
      {init && (
        <Particles
          id={'tsparticles-' + index}
          options={{
            fullScreen: {
              enable: false, // Disable the full screen fixed positioning
            },
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
              },
              color: {
                value: '#00ff00',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'bottom-right',
                outModes: {
                  default: 'out',
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
            retina_detect: true,
          }}
          className={styles.particlesBlock}
        />
      )}
    </>
  );
};

export default ParticlesComponent;
