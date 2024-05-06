import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const RoadMapText = ({ right = false, texts = [] }: { texts: string[], right?: boolean }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView])

    return (
        <motion.div ref={ref}
            style={{ overflow: 'hidden' }}
            className={styles.info}
            animate={controls}
            initial='hidden'
            variants={{
                hidden: {
                    opacity: 0,
                    ...(right ? { marginLeft: '-100px', marginRight: '100px' } : { marginLeft: '100px', marginRight: '-100px' }),
                },
                visible: {
                    opacity: 1,
                    marginLeft: '0',
                    marginRight: '0',
                    transition: { duration: 0.8, delay: 0.8 }
                }
            }}
        >
            {texts.map(el =>
                <div>
                    <div className={styles.dot} />
                    <div className={styles.text}>
                        {el}
                    </div>
                </div>
            )}
        </motion.div>
    );
};
