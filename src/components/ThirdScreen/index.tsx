
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import styles from './style.module.scss'
import { useEffect, useRef } from 'react';

export const ThirdScreen = () => {
    const { scrollYProgress } = useViewportScroll();
    // const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [-50, 20]);

    const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
    const descriptionTranslateY = useTransform(scrollYProgress, [0.1, 0.15], [-50, 20]);

    const controls = useAnimation();
    const ref1 = useRef(null);

    const checkCenter = () => {
        if (ref1.current) {
            const rect = (ref1.current as any).getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const center = rect.top + rect.height / 2;


            const isElementCentered = center > 0 && center < windowHeight / 2;
            if (isElementCentered) {
                controls.start({
                    width: '168px',
                    transition: { duration: 0.5, ease: 'easeOut' }
                });
            } else if (center > windowHeight) {
                controls.start({ width: 0 });
            }
        } else {
            controls.start({ width: 0 });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", checkCenter);
        return () => {
            window.removeEventListener("scroll", checkCenter);
        };
    }, [])

    const refTitle = useRef(null);
    const refDescription = useRef(null);

    // Calculate the center of the screen
    const calcCenter = (ref: any) => {
        if (!ref.current) return 0;
        const rect = (ref.current as any).getBoundingClientRect();
        return (rect.top + rect.bottom) / 2;
    };

    // Transform scroll progress into opacity based on element's proximity to screen center
    const opacity = useTransform(scrollYProgress, value => {
        const elementCenter = calcCenter(refTitle);
        const viewportCenter = window.innerHeight / 2;

        // Full opacity when the center of the element is above the viewport's center
        if (elementCenter <= viewportCenter) {
            return 1; // Full opacity once the center of the element is above the viewport's center
        } else {
            // Calculate decreasing opacity as the element goes below the viewport center
            const distanceToCenter = Math.abs(elementCenter - viewportCenter);
            return Math.max(0, 1 - distanceToCenter / viewportCenter);
        }
    });

    const opacityDescription = useTransform(scrollYProgress, value => {
        const elementCenter = calcCenter(refDescription);
        const viewportCenter = window.innerHeight / 2;

        // Full opacity when the center of the element is above the viewport's center
        if (elementCenter <= viewportCenter) {
            return 1; // Full opacity once the center of the element is above the viewport's center
        } else {
            // Calculate decreasing opacity as the element goes below the viewport center
            const distanceToCenter = Math.abs(elementCenter - viewportCenter);
            return Math.max(0, 1 - distanceToCenter / viewportCenter);
        }
    });

    return (
        <div className={styles.container}>
            <img src="/bg-images/third-bg.png" className={styles.bgImage} />
            <div className={styles.titleBlock}>
                <div style={{ width: '168px', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <motion.div
                        ref={ref1}
                        initial={{ width: '0', height: '29px' }}
                        animate={controls}
                        style={{
                            height: '29px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-left.svg' className={styles.arrowIcon}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </motion.div>
                </div>
                <motion.div
                    ref={refTitle}
                    style={{
                        opacity,
                        translateY,
                    }}
                >
                    <div>How to play & Earn</div>
                </motion.div>

                <div style={{ width: '168px', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <motion.div
                        initial={{ width: '0', height: '29px' }}
                        animate={controls}
                        style={{
                            height: '29px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-right.svg' className={styles.arrowIcon}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                ref={refDescription}
                style={{
                    opacity: opacityDescription,
                    translateY: descriptionTranslateY,
                }}
                className={styles.description}
            >
                Partake in our airdrop competition and win millions of $NITE token!
            </motion.div>
        </div>
    );
};
