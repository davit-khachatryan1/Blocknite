import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { FC, useCallback, useMemo } from 'react'
import { Engine, ISourceOptions } from 'tsparticles-engine'
import { QueryObserverResult } from 'react-query'
import styles from './style.module.scss'

export interface IParticlesProps {
  id: string
}

export interface IUseQueryProps {
  isLoading?: boolean
  isError?: boolean
  data: any
  error: unknown
}

export interface ISymbolPriceProps {
  price: number
  symbol: string
}

export interface IInputProps {
  data: ISymbolPriceProps[]
}

export interface IUseSymbolPriceProps {
  symbolPrice: any
  refetch: () => Promise<QueryObserverResult<any, unknown>>
}

const ParticlesComponent = ({ index }: { index: number }) => {
  const options: ISourceOptions = useMemo(() => ({
    fullScreen: {
      enable: false // Disable the full screen fixed positioning
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#FFC31F',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: { min: 1, max: 2 },
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // Disable connecting lines
        distance: 100,
        color: '#ff512f',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: { min: 2, max: 3 },
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    background: {
      position: 'absolute'
    },
    retina_detect: true,
  }), [])

  const particlesInit = useCallback((engine: Engine): any => {

    loadSlim(engine)
  }, [])


  return (
    <Particles id={'tsparticles-' + index} init={particlesInit} options={options} className={styles.particlesBlock} />
  )
}

export default ParticlesComponent
