import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

export const RoadMapText = ({ right = false, texts = [], isAnimate = false, duration = 0, delay = 0 }: { texts: string[], right?: boolean, isAnimate?: boolean, duration?: number, delay?: number }) => {
    const { scrolling, windowWidth } = useStateProvider();
    const controls = useAnimation();


    useEffect(() => {
        if (!scrolling) {
            if (isAnimate || windowWidth <= 576) {
                controls.start('visible');
            }
        }
    }, [isAnimate, scrolling, windowWidth])

    return (
        <motion.div
            style={{ overflow: 'hidden' }}
            className={styles.info}
            animate={controls}
            initial='hidden'
            variants={{
                hidden: {
                    opacity: 0,
                    ...(right ? { marginLeft: calcVW('-100px', windowWidth), marginRight: calcVW('100px', windowWidth) } : { marginLeft: calcVW('100px', windowWidth), marginRight: calcVW('-100px', windowWidth) }),
                },
                visible: {
                    opacity: 1,
                    marginLeft: '0',
                    marginRight: '0',
                    transition: { duration, delay }
                }
            }}
        >
            {texts.map((el, index) =>
                <div key={index}>
                    <div className={styles.dot} />
                    <div className={styles.text}>
                        {el}
                    </div>
                </div>
            )}
        </motion.div>
    );
};
