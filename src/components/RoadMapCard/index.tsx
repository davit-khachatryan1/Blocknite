import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { calcVW } from '../../utils/hooks/functions';

export const RoadMapCard = ({ right = false, title = 'Pre-Launch', first = '' }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (inView || window.innerWidth <= 576) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView])

    console.log(first);
    

    return (
        <motion.div ref={ref}
            style={{ overflow: 'hidden' }}
            className={`${right ? styles.right : styles.left}`}
            animate={controls}
            initial='hidden'
            variants={{
                hidden: { width: '0' },
                visible: {
                    width: calcVW('358px', 288),
                    transition: { duration: 0.8, delay: 0.5 }
                }
            }}
        >
            {first && <div className={styles[first]}/>}

            <div className={styles.container} style={{
                justifyContent: right ? 'flex-end' : 'flex-start',
                right: right ? 'auto' : 0
            }}>

                <div className={styles.title}>
                    {title}
                </div>
                <img src={right ? "/icons/map-card-right.svg" : "/icons/map-card-left.svg"} alt="" className={styles.desktopIcon}/>
                <img src={"/icons/map-card-mobile.svg"} alt="" className={styles.mobileIcon} />
            </div>
        </motion.div>
    );
};
