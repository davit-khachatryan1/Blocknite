import { memo, useEffect, useState, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';

interface FAQInputProps {
    title: string;
    description: string;
    index: number;
    setActive: (index: number) => void;
    active: number;
}

const FAQInput: React.FC<FAQInputProps> = ({ title, description, index, setActive, active }) => {
    const { scrolling } = useStateProvider();
    const titleControls = useAnimation();
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    const variants = useMemo(() => ({
        hidden: {
            opacity: 0,
            height: '0',
            transition: { duration: 0.75 },
        },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.75 },
        },
    }), []);

    useEffect(() => {
        if (!scrolling) {
            if (inViewTitle && active === index) {
                setShouldAnimate(false);
                titleControls.start('visible');
            } else {
                titleControls.start('hidden');
            }
        }
    }, [inViewTitle, active, index, scrolling, shouldAnimate, titleControls]);

    return (
        <div className={`${(active === index) && styles.active}`}>
            <div className={styles.input} onClick={() => setActive(active === index ? -1 : index)}>
                {title}
                <div className={styles.vector}>
                    <img src='/icons/vector.svg' loading='lazy' alt="vector icon" />
                </div>
            </div>
            <motion.div
                ref={refTitle}
                className={styles.textBlock}
                animate={titleControls}
                initial="hidden"
                variants={variants}
            >
                <div className={styles.divide} />
                <div className={styles.text}>{description}</div>
                <div className={styles.divide} />
            </motion.div>
        </div>
    );
};

export default memo(FAQInput);
