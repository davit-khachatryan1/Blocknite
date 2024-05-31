import { memo, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss';

interface TitleBlockProps {
    title: string;
    description?: string;
    mobileClassName?: boolean;
    descriptionBottom?: boolean;
    secondTitle?: string;
    withOutDescription?: boolean;
}

const TitleBlock: React.FC<TitleBlockProps> = ({
    title,
    description = '',
    mobileClassName = false,
    descriptionBottom = false,
    secondTitle,
    withOutDescription = false
}) => {
    const { scrolling, windowWidth } = useStateProvider();
    const controls = useAnimation();
    const ref1 = useRef<HTMLDivElement>(null);

    const titleControls = useAnimation();
    const [refTitle, inVewTitle] = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    useEffect(() => {
        if (!scrolling && inVewTitle) {
            titleControls.start('visible');
        }
    }, [inVewTitle, scrolling, titleControls]);

    const checkCenter = useCallback(() => {
        if (!(window as any)["scrolling"]) {
            if (ref1.current) {
                const rect = ref1.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const center = rect.top + rect.height / 2;

                const isElementCentered = center > 0 && center < windowHeight / 2;
                if (isElementCentered) {
                    controls.start({
                        width: calcVW('168px', (window as any).customWidth),
                        transition: { duration: 0.5, ease: 'easeOut' }
                    });
                }
            }
        }
    }, [controls]);

    useEffect(() => {
        window.addEventListener("scroll", checkCenter);
        return () => {
            window.removeEventListener("scroll", checkCenter);
        };
    }, []);

    return (
        <>
            <div className={styles.titleBlock}>
                <div style={{ width: calcVW('168px', windowWidth), display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={mobileClassName ? styles.isMobile : ''}>
                    <motion.div
                        ref={ref1}
                        initial={{ width: '0', height: calcVW('29px', windowWidth) }}
                        animate={controls}
                        style={{
                            height: calcVW('29px', windowWidth),
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-left.svg'
                            className={styles.arrowIcon}
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            loading='lazy'
                            alt="Arrow Left"
                        />
                    </motion.div>
                </div>
                <motion.div
                    ref={refTitle}
                    animate={titleControls}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0, transform: `translateY(${calcVW('-25px', windowWidth)})` },
                        visible: {
                            opacity: 1,
                            transform: 'translateY(0)',
                            transition: { duration: 0.8 }
                        }
                    }}
                >
                    <div>{mobileClassName && secondTitle ? secondTitle : title}</div>
                </motion.div>

                <div style={{ width: calcVW('168px', windowWidth), display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={mobileClassName ? styles.isMobile : ''}>
                    <motion.div
                        initial={{ width: '0', height: calcVW('29px', windowWidth) }}
                        animate={controls}
                        style={{
                            height: calcVW('29px', windowWidth),
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-right.svg'
                            className={styles.arrowIcon}
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            loading='lazy'
                            alt="Arrow Right"
                        />
                    </motion.div>
                </div>
            </div>
            {!withOutDescription && (
                <motion.div
                    className={`${styles.description} ${descriptionBottom ? styles.descriptionBottom : ''}`}
                    animate={titleControls}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0, transform: `translateY(${calcVW('-25px', windowWidth)})` },
                        visible: {
                            opacity: 1,
                            transform: 'translateY(0)',
                            transition: { duration: 0.8, delay: 0.8 }
                        }
                    }}
                >
                    {description}
                </motion.div>
            )}
        </>
    );
};

export default memo(TitleBlock);