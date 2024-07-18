import { memo, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss';
import useWindowSize from '@/utils/hooks/useWindowSize';

interface RoadMapTextProps {
    texts: string[];
    right?: boolean;
    isAnimate?: boolean;
    duration?: number;
    delay?: number;
}

const RoadMapText: React.FC<RoadMapTextProps> = ({ right = false, texts = [], isAnimate = false, duration = 0, delay = 0 }) => {
    const { scrolling } = useStateProvider();
    const { windowWidth } = useWindowSize()
    const controls = useAnimation();

    useEffect(() => {
        if (!scrolling) {
            if (isAnimate || windowWidth <= 576) {
                controls.start('visible');
            }
        }
    }, [isAnimate, scrolling, windowWidth, controls]);

    const variants = useMemo(() => ({
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
    }), [right, windowWidth, duration, delay]);

    return (
        windowWidth ? <motion.div
            style={{ overflow: 'hidden' }}
            className={styles.info}
            animate={controls}
            initial="hidden"
            variants={variants}
        >
            {texts.map((el, index) => (
                <div key={index}>
                    <div className={styles.dot} />
                    <div className={styles.text}>{el}</div>
                </div>
            ))}
        </motion.div> : <></>
    );
};

export default memo(RoadMapText);
