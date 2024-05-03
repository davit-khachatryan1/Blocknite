import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;
}

export const FourthScreen = () => {
    const segmentVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: { delay: i * 0.5, duration: 1 }
        })
    };

    const [segments, setSegments] = useState({
        Orange: { color: '#C3A46550', rotation: -50, degrees: 270 },
        Red: { color: '#BF777B50', rotation: 221.5, degrees: 5 },
        Yellow: { color: '#E3E1D950', rotation: 228, degrees: 38.5 },
        Green: { color: '#A2B79550', rotation: 268, degrees: 40.5 },
    })

    const strokeWidth = 108;
    const radius = 240;

    const refMain = useRef(null);
    useEffect(() => {

        const handleScroll = (event: any) => {
            if (refMain.current) {
                const bounding = (refMain.current as any).getBoundingClientRect()
                const innerHeight = (refMain.current as any).offsetHeight;
                const top = -(bounding.top - window.innerHeight)


                let newSegments = { ...segments };
                if (top > innerHeight * 0.4 && top < innerHeight * 0.78) {
                    const dif = innerHeight * 0.78 - innerHeight * 0.4;
                    newSegments = { ...newSegments, Orange: { color: '#C3A46550', rotation: -50, degrees: 270 / dif * (top - (innerHeight * 0.4)) } }
                } else if (top < innerHeight * 0.4) {
                    newSegments = { ...newSegments, Orange: { color: '#C3A46550', rotation: -50, degrees: 0 } }
                } else {
                    newSegments = { ...newSegments, Orange: { color: '#C3A46550', rotation: -50, degrees: 270 } }
                }

                if (top > innerHeight * 0.78 && top < innerHeight * 0.84) {
                    const dif = innerHeight * 0.84 - innerHeight * 0.78;
                    newSegments = { ...newSegments, Red: { color: '#BF777B50', rotation: 221.5, degrees: 5 / dif * (top - (innerHeight * 0.78)) } }
                } else if (top < innerHeight * 0.78) {
                    newSegments = { ...newSegments, Red: { color: '#BF777B50', rotation: 221.5, degrees: 0 } }
                } else {
                    newSegments = { ...newSegments, Red: { color: '#BF777B50', rotation: 221.5, degrees: 5 } }
                }

                if (top > innerHeight * 0.84 && top < innerHeight * 0.92) {
                    const dif = innerHeight * 0.92 - innerHeight * 0.84;
                    newSegments = { ...newSegments, Yellow: { color: '#E3E1D950', rotation: 228, degrees: 38.5 / dif * (top - (innerHeight * 0.84)) } }
                } else if (top < innerHeight * 0.84) {
                    newSegments = { ...newSegments, Yellow: { color: '#E3E1D950', rotation: 228, degrees: 0 } }
                } else {
                    newSegments = { ...newSegments, Yellow: { color: '#E3E1D950', rotation: 228, degrees: 38.5 } }
                }

                if (top > innerHeight * 0.92 && top < innerHeight * 1) {
                    const dif = innerHeight * 1 - innerHeight * 0.92;
                    newSegments = { ...newSegments, Green: { color: '#A2B79550', rotation: 268, degrees: 40.5 / dif * (top - (innerHeight * 0.92)) } }
                } else if (top < innerHeight * 0.92) {
                    newSegments = { ...newSegments, Green: { color: '#A2B79550', rotation: 268, degrees: 0 } }
                } else {
                    newSegments = { ...newSegments, Green: { color: '#A2B79550', rotation: 268, degrees: 40.5 } }
                }
                setSegments(newSegments)
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container} ref={refMain}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <motion.svg width="595" height="595" viewBox="0 0 595 595" >
                    {Object.values(segments).map((segment, index) => (
                        <motion.path
                            key={index}
                            fill="none"
                            strokeWidth={strokeWidth}
                            stroke={segment.color}
                            d={describeArc(297.5, 297.5, radius, segment.rotation, segment.rotation + segment.degrees)}
                            variants={segmentVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        />
                    ))}
                </motion.svg>
            </div>
        </div>
    );
};
