import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss';
import { memo, useEffect, useMemo } from 'react';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';
import useWindowSize from '@/utils/hooks/useWindowSize';

interface RoadMapCardProps {
    right?: boolean;
    title?: string;
    first?: string;
    isAnimate?: boolean;
    duration?: number;
    delay?: number;
}

const RoadMapCard: React.FC<RoadMapCardProps> = ({ right = false, title = 'Pre-Launch', first = '', isAnimate = false, duration = 0, delay = 0 }) => {
    const controls = useAnimation();
    const { windowWidth } = useWindowSize()
    const { scrolling } = useStateProvider();

    useEffect(() => {
        if (!scrolling) {
            if (isAnimate || windowWidth <= 576) {
                controls.start('visible');
            }
        }
    }, [isAnimate, scrolling, windowWidth, controls]);

    const cardStyle = useMemo(() => ({
        justifyContent: right ? 'flex-end' : 'flex-start',
        right: right ? 'auto' : 0
    }), [right]);

    const variants = useMemo(() => ({
        hidden: { width: '0' },
        visible: {
            width: calcVW('358px', windowWidth, 288),
            transition: { duration, delay }
        }
    }), [windowWidth, duration, delay]);

    return (
        <motion.div
            style={{ overflow: 'hidden' }}
            className={`${right ? styles.right : styles.left}`}
            animate={controls}
            initial='hidden'
            variants={variants}
        >
            {first && <div className={styles[first]} />}

            <div className={styles.container} style={cardStyle}>
                <div className={styles.title}>
                    {title}
                </div>
                <img src={right ? "/icons/map-card-right.svg" : "/icons/map-card-left.svg"} alt="" className={styles.desktopIcon} loading='lazy' />
                <img src={"/icons/map-card-mobile.svg"} alt="" className={styles.mobileIcon} loading='lazy' />
            </div>
        </motion.div>
    );
};

export default memo(RoadMapCard);
