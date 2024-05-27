import React, { useEffect, useRef, useCallback } from 'react';
import { calcVW } from '../../utils/hooks/functions';

export interface Point {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  visible: boolean;
  angle: number;
  waveAmplitude: number;
  waveFrequency: number;
  shape: Point[];
}

interface ParticleCanvasProps {
  spaces: Point[][];
  minSpeed: number;
  maxSpeed: number;
  pointColors: string[];
  pointMinSize: number;
  pointMaxSize: number;
  movementDirection: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top' | 'left-top-to-right-bottom' | 'right-top-to-left-bottom' | 'left-bottom-to-right-top' | 'right-bottom-to-left-top';
  minParticles: number;
  maxParticles: number;
  divade: number;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({
  spaces,
  minSpeed,
  maxSpeed,
  pointColors,
  pointMinSize,
  pointMaxSize,
  movementDirection,
  minParticles,
  maxParticles,
  divade,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const getRandomInt = useCallback((min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const getRandomPosition = useCallback((): { x: number; y: number } => {
    return {
      x: getRandomInt(0, (calcVW(1920) as number)),
      y: getRandomInt(0, (calcVW(1080) as number)),
    };
  }, [getRandomInt]);

  const getEdgePosition = useCallback((): { x: number; y: number } => {
    let x, y;
    const is = Math.round(Math.random())

    switch (movementDirection) {
      case 'left-to-right':
        x = 0;
        y = getRandomInt(0, (calcVW(1080) as number));
        break;
      case 'right-to-left':
        x = (calcVW(1920) as number);
        y = getRandomInt(0, (calcVW(1080) as number));
        break;
      case 'top-to-bottom':
        x = getRandomInt(0, (calcVW(1920) as number));
        y = 0;
        break;
      case 'bottom-to-top':
        x = getRandomInt(0, (calcVW(1920) as number));
        y = (calcVW(1080) as number);
        break;
      case 'left-top-to-right-bottom':
        x = is ? Math.random() * (calcVW(1920) as number) : 0;
        y = !is ? Math.random() * (calcVW(1080) as number) : 0;
        break;
      case 'right-top-to-left-bottom':
        x = is ? Math.random() * (calcVW(1920) as number) : (calcVW(1920) as number);
        y = !is ? Math.random() * (calcVW(1080) as number) : 0;
        break;
      case 'left-bottom-to-right-top':
        x = is ? Math.random() * (calcVW(1920) as number) : 0;
        y = !is ? (800 + Math.random() * (calcVW(280) as number)) : (calcVW(1080) as number);
        break;
      case 'right-bottom-to-left-top':
        x = is ? Math.random() * (calcVW(1920) as number) : (calcVW(1920) as number);
        y = !is ? Math.random() * (calcVW(1080) as number) : (calcVW(1080) as number);
        break;
      default:
        x = getRandomInt(0, (calcVW(1920) as number));
        y = getRandomInt(0, (calcVW(1080) as number));
        break;
    }

    return { x, y };
  }, [getRandomInt, movementDirection]);

  const createIrregularShape = useCallback((size: number): Point[] => {
    const points: Point[] = [];
    const numPoints = getRandomInt(5, 10); // Number of points for the irregular shape

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const radius = size / 2 + Math.random() * (size / 2);
      points.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    }

    return points;
  }, [getRandomInt]);

  const createParticle = useCallback((initial: boolean = false): Particle => {
    const { x, y } = initial ? getRandomPosition() : getEdgePosition();
    let speedX = 0;
    let speedY = 0;

    switch (movementDirection) {
      case 'left-to-right':
        speedX = getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'right-to-left':
        speedX = -getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'top-to-bottom':
        speedY = getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'bottom-to-top':
        speedY = -getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'left-top-to-right-bottom':
        speedX = getRandomInt(minSpeed, maxSpeed) / 10;
        speedY = getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'right-top-to-left-bottom':
        speedX = -getRandomInt(minSpeed, maxSpeed) / 10;
        speedY = getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'left-bottom-to-right-top':
        speedX = getRandomInt(minSpeed, maxSpeed) / 5;
        speedY = -getRandomInt(minSpeed, maxSpeed) / 10;
        break;
      case 'right-bottom-to-left-top':
        speedX = -getRandomInt(minSpeed, maxSpeed) / 10;
        speedY = -getRandomInt(minSpeed, maxSpeed) / 10;
        break;
    }

    const size = getRandomInt(pointMinSize, pointMaxSize);
    const color = pointColors[Math.floor(Math.random() * pointColors.length)];
    const angle = Math.random() * 2 * Math.PI;
    const waveAmplitude = Math.random() * 2 + 1; // Smaller, more random amplitude
    const waveFrequency = Math.random() * 0.05 + 0.01; // Smaller, more random frequency
    const shape = createIrregularShape(size);
    return { x, y, size, speedX, speedY, color, visible: true, angle, waveAmplitude, waveFrequency, shape };
  }, [getRandomPosition, getEdgePosition, getRandomInt, minSpeed, maxSpeed, pointColors, pointMinSize, pointMaxSize, movementDirection, createIrregularShape]);

  const resetParticlePosition = useCallback((particle: Particle) => {
    const { x, y } = getEdgePosition();
    particle.x = x;
    particle.y = y;
    particle.visible = true;
    particle.angle = Math.random() * 2 * Math.PI;
    particle.waveAmplitude = Math.random() * 2 + 1;
    particle.waveFrequency = Math.random() * 0.05 + 0.01;
    particle.shape = createIrregularShape(particle.size);
  }, [getEdgePosition, createIrregularShape]);

  const isPointInPolygon = useCallback((point: Point, polygon: Point[]): boolean => {
    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x, yi = polygon[i].y;
      const xj = polygon[j].x, yj = polygon[j].y;
      const intersect = ((yi > point.y) !== (yj > point.y)) &&
        (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
      if (intersect) isInside = !isInside;
    }
    return isInside;
  }, []);

  const updateParticlePosition = useCallback((particle: Particle) => {
    particle.angle += particle.waveFrequency;
    const waveOffset = (Math.sin(particle.angle) * particle.waveAmplitude) / divade;

    switch (movementDirection) {
      case 'left-to-right':
        particle.x += particle.speedX;
        particle.y += waveOffset;
        break;
      case 'right-to-left':
        particle.x += particle.speedX;
        particle.y += waveOffset;
        break;
      case 'top-to-bottom':
        particle.y += particle.speedY;
        particle.x += waveOffset;
        break;
      case 'bottom-to-top':
        particle.y += particle.speedY;
        particle.x += waveOffset;
        break;
      case 'left-top-to-right-bottom':
        particle.x += particle.speedX;
        particle.y += particle.speedY + waveOffset;
        break;
      case 'right-top-to-left-bottom':
        particle.x += particle.speedX;
        particle.y += particle.speedY + waveOffset;
        break;
      case 'left-bottom-to-right-top':
        particle.x += particle.speedX;
        particle.y += particle.speedY + waveOffset;
        break;
      case 'right-bottom-to-left-top':
        particle.x += particle.speedX;
        particle.y += particle.speedY + waveOffset;
        break;
    }

    if (
      (movementDirection === 'left-to-right' && particle.x > (calcVW(1920) as number)) ||
      (movementDirection === 'right-to-left' && particle.x < 0) ||
      (movementDirection === 'top-to-bottom' && particle.y > (calcVW(1080) as number)) ||
      (movementDirection === 'bottom-to-top' && particle.y < 0) ||
      (movementDirection === 'left-top-to-right-bottom' && (particle.x > (calcVW(1920) as number) || particle.y > (calcVW(1080) as number))) ||
      (movementDirection === 'right-top-to-left-bottom' && (particle.x < 0 || particle.y > (calcVW(1080) as number))) ||
      (movementDirection === 'left-bottom-to-right-top' && (particle.x > (calcVW(1920) as number) || particle.y < 0)) ||
      (movementDirection === 'right-bottom-to-left-top' && (particle.x < 0 || particle.y < 0))
    ) {
      resetParticlePosition(particle);
    }

    particle.visible = spaces.some(space => isPointInPolygon({ x: particle.x, y: particle.y }, space));
  }, [movementDirection, resetParticlePosition, spaces, isPointInPolygon]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particlesRef.current.forEach(particle => {
      if (particle.visible) {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.moveTo(particle.x + particle.shape[0].x, particle.y + particle.shape[0].y);
        particle.shape.forEach(point => {
          ctx.lineTo(particle.x + point.x, particle.y + point.y);
        });
        ctx.closePath();
        ctx.fill();
      }
    });
  }, []);

  const drawSpaces = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#000000';
    spaces.forEach(space => {
      ctx.beginPath();
      ctx.moveTo(space[0].x, space[0].y);
      space.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.closePath();
      ctx.stroke();
    });
  }, [spaces]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const animate = () => {
        particlesRef.current.forEach(updateParticlePosition);
        drawParticles(ctx);
        // drawSpaces(ctx);
        requestAnimationFrame(animate);
      };

      if (particlesRef.current.length === 0) {
        const numParticles = getRandomInt(minParticles, maxParticles);

        for (let i = 0; i < numParticles; i++) {
          particlesRef.current.push(createParticle(true));
        }
        animate();
        const timout = setTimeout(() => {
          clearTimeout(timout);
          const createParticlesWithDelay = () => {
            for (let i = 0; i < numParticles; i++) {
              const timout2 = setTimeout(() => {
                clearTimeout(timout2);
                particlesRef.current.push(createParticle(false));
              }, i * 200);
            }
          };
          createParticlesWithDelay();
        }, 1000);
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={calcVW(1920)} height={calcVW(1080)} />;
};

export default ParticleCanvas;
