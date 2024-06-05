import { memo, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss';

interface RoadMapTextProps {
    texts: string[];
    right?: boolean;
    isAnimate?: boolean;
    duration?: number;
    delay?: number;
}

const RoadMapText: React.FC<RoadMapTextProps> = ({ right = false, texts = [], isAnimate = false, duration = 0, delay = 0 }) => {
    const { scrolling, windowWidth } = useStateProvider();
    const controls = useAnimation();

    useEffect(() => {
        if (!scrolling) {
            if (isAnimate || windowWidth <= 576) {
                setTimeout(() => {
                    controls.start('visible');
                }, delay * 1000)
            }
        }
    }, [isAnimate, scrolling, windowWidth, controls]);

    const variants = useMemo(() => ({
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: duration / texts.length,
            }
        }
    }), [right, windowWidth, duration]);

    return (
        <motion.div
            className={styles.info}
            animate={controls}
            initial="hidden"
            variants={variants}
        >
            {texts.map((el, index) => (
                <motion.div
                    variants={{
                        hidden: {
                            ...(right ?
                                {
                                    marginLeft: calcVW('-100px', windowWidth),
                                    marginRight: calcVW('100px', windowWidth),
                                    opacity: 0
                                } :
                                {
                                    marginLeft: calcVW('100px', windowWidth),
                                    marginRight: calcVW('-100px', windowWidth),
                                    opacity: 0
                                }),
                        },
                        visible: {
                            opacity: 1,
                            marginLeft: '0',
                            marginRight: '0',
                            transition: {
                                duration: duration / texts.length,
                            }
                        },
                    }} key={index}>
                    <div className={styles.dot} />
                    <div className={styles.text}>{el}</div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default memo(RoadMapText);
