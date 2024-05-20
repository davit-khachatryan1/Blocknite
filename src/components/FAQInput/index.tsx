import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';

const FAQInput = ({ title, description, index, setActive, active }: any) => {
    const { scrolling } = useStateProvider();
    const titleControls = useAnimation();
    const [refTitle, inVewTitle] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (!scrolling) {
            if (inVewTitle && active == index) {
                titleControls.start('visible')
            }
        }
    }, [inVewTitle, active, index, scrolling])

    return <div className={`${(active === index) && styles.active}`}>
        <div className={styles.input} onClick={() => setActive(index == active ? -1 : index)}>
            {title}
            <div className={styles.vector}>
                <img src='/icons/vector.svg' />
            </div>
        </div>
        <motion.div
            ref={refTitle}
            className={styles.textBlock}
            animate={titleControls}
            initial="hidden"
            variants={{
                hidden: {
                    opacity: 0, height: '0',
                    transition: { duration: 0.75 }
                },
                visible: {
                    opacity: 1,
                    height: 'auto',
                    transition: { duration: 0.75 }
                }
            }}
        >
            <div className={styles.divide} />
            <div className={styles.text}>{description}</div>
            <div className={styles.divide} />
        </motion.div>
    </div>
};

export default FAQInput;
