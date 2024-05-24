import React, { useEffect, useRef, useCallback, memo } from 'react';

interface Point {
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
}

interface ParticleCanvasProps {
  spaces: Point[][];
  minSpeed: number;
  maxSpeed: number;
  pointColors: string[];
  pointMinSize: number;
  pointMaxSize: number;
  movementDirection: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
  minParticles: number;
  maxParticles: number;
  noVisible?: 'top' | 'left' | 'right' | 'bottom';
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
  noVisible,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const getRandomInt = useCallback((min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const getRandomPosition = useCallback((): { x: number; y: number } => {
    return {
      x: getRandomInt(0, window.innerWidth),
      y: getRandomInt(0, window.innerHeight),
    };
  }, [getRandomInt]);

  const createParticle = useCallback((): Particle => {
    const { x, y } = getRandomPosition();
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
    }

    const size = getRandomInt(pointMinSize, pointMaxSize);
    const color = pointColors[Math.floor(Math.random() * pointColors.length)];
    return { x, y, size, speedX, speedY, color, visible: true };
  }, [getRandomPosition, getRandomInt, minSpeed, maxSpeed, pointColors, pointMinSize, pointMaxSize, movementDirection]);

  const resetParticlePosition = useCallback((particle: Particle) => {
    const { x, y } = getRandomPosition();
    particle.x = x;
    particle.y = y;
    particle.visible = true;
  }, [getRandomPosition]);

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

  const avoidNoVisibleBorders = useCallback((particle: Particle) => {
    if (noVisible) {
      spaces.forEach(space => {
        for (let i = 0, j = space.length - 1; i < space.length; j = i++) {
          const xi = space[i].x, yi = space[i].y;
          const xj = space[j].x, yj = space[j].y;

          // Check if particle is close to the edge
          const distToEdge = Math.abs((yj - yi) * particle.x - (xj - xi) * particle.y + xj * yi - yj * xi) /
            Math.sqrt((yj - yi) ** 2 + (xj - xi) ** 2);

          if (distToEdge < 10) { // Threshold distance to edge
            if (noVisible === 'top' && (particle.y < yi || particle.y < yj)) {
              particle.speedY = Math.abs(particle.speedY); // Move downwards
            }
            if (noVisible === 'bottom' && (particle.y > yi || particle.y > yj)) {
              particle.speedY = -Math.abs(particle.speedY); // Move upwards
            }
            if (noVisible === 'left' && (particle.x < xi || particle.x < xj)) {
              particle.speedX = Math.abs(particle.speedX); // Move right
            }
            if (noVisible === 'right' && (particle.x > xi || particle.x > xj)) {
              particle.speedX = -Math.abs(particle.speedX); // Move left
            }
          }
        }
      });
    }
  }, [noVisible, spaces]);

  const updateParticlePosition = useCallback((particle: Particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    avoidNoVisibleBorders(particle);

    if (
      (movementDirection === 'left-to-right' && particle.x > window.innerWidth) ||
      (movementDirection === 'right-to-left' && particle.x < 0) ||
      (movementDirection === 'top-to-bottom' && particle.y > window.innerHeight) ||
      (movementDirection === 'bottom-to-top' && particle.y < 0)
    ) {
      resetParticlePosition(particle);
    }

    particle.visible = spaces.some(space => isPointInPolygon({ x: particle.x, y: particle.y }, space));
  }, [movementDirection, resetParticlePosition, spaces, isPointInPolygon, avoidNoVisibleBorders]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particlesRef.current.forEach(particle => {
      if (particle.visible) {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, []);

  // const drawSpaces = useCallback((ctx: CanvasRenderingContext2D) => {
  //   ctx.strokeStyle = '#000000';
  //   spaces.forEach(space => {
  //     ctx.beginPath();
  //     ctx.moveTo(space[0].x, space[0].y);
  //     space.forEach(point => ctx.lineTo(point.x, point.y));
  //     ctx.closePath();
  //     ctx.stroke();
  //   });
  // }, [spaces]);

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

        // Initialize particles with delay
        const createParticlesWithDelay = () => {
          for (let i = 0; i < numParticles; i++) {
            const timeout = setTimeout(() => {
              clearTimeout(timeout)
              particlesRef.current.push(createParticle());
            }, i * 50); // Adjust the delay as needed
          }
        };

        createParticlesWithDelay();
      }

      animate();
    }
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};

export default memo(ParticleCanvas);
