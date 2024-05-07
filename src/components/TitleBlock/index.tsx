import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './style.module.scss';
import { calcVW } from '../../utils/hooks/functions';

const TitleBlock = ({ title, description }: any) => {
    const controls = useAnimation();
    const ref1 = useRef(null);

    const titleControls = useAnimation();
    const [refTitle, inVewTitle] = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    useEffect(() => {
        if (inVewTitle) {
            titleControls.start('visible')
        } else {
            titleControls.start('hidden')
        }
    }, [inVewTitle])

    const checkCenter = () => {
        if (ref1.current) {
            const rect = (ref1.current as any).getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const center = rect.top + rect.height / 2;


            const isElementCentered = center > 0 && center < windowHeight / 2;
            if (isElementCentered) {
                controls.start({
                    width: calcVW('168px'),
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

    return <>

        <div className={styles.titleBlock}>
            <div style={{ width: calcVW('168px'), display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.div
                    ref={ref1}
                    initial={{ width: '0', height: calcVW('29px') }}
                    animate={controls}
                    style={{
                        height: calcVW('29px'),
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
                animate={titleControls}
                initial="hidden"
                variants={{
                    hidden: { opacity: 0, transform: `translateY(${calcVW('-25px')})` },
                    visible: {
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: { duration: 0.8 }
                    }
                }}
            >
                <div>{title}</div>
            </motion.div>

            <div style={{ width: calcVW('168px'), display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <motion.div
                    initial={{ width: '0', height: calcVW('29px') }}
                    animate={controls}
                    style={{
                        height: calcVW('29px'),
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
            className={styles.description}
            animate={titleControls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0, transform: `translateY(${calcVW('-25px')})` },
                visible: {
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: { duration: 0.8, delay: 0.8 }
                }
            }}
        >
            {description}
        </motion.div>
    </>
};

export default TitleBlock;
