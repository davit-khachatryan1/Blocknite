export interface Point {
    x: number;
    y: number;
}

export interface Particle {
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

export interface ParticleCanvasProps {
    id: any,
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
    windowWidth: number
}
