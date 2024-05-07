import { motion } from 'framer-motion';
import { Button } from '../Button';
import Typewriter from '../TypeWriter';
import { calcVW } from '../../utils/hooks/functions';

import styles from './style.module.scss'

export const MainScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <motion.img
                    className={styles.logo}
                    src="/logos/logo.png"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 0, x: 0, scale: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.7 }}
                />
                <Typewriter text="ALTARIN" classname="altarin" />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }} />
                <Typewriter text="Defend your home" classname="name" delay={1000} />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }} />
                <motion.div
                    className={styles.description}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 1.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('65px') },
                    }}
                >
                    Stop the Orgurin, The fate of Trea is in your hands.
                </motion.div>
                <motion.div
                    className={styles.presale}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('65px') },
                    }}
                >
                    <Button withIcon={true}>PRESALE</Button>
                </motion.div>
            </div>

            <div className={styles.buttonContainer}>
                <motion.div
                    className={styles.twoButtonMain}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('50px') },
                    }}
                >
                    <div className={styles.twoButton}>
                        <Button classname="active">$NITE address</Button>
                        <Button>Treanin address</Button>
                    </div>
                </motion.div>
                <motion.div
                    className={styles.twoButtonMain}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('50px') },
                    }}
                >
                    <div className={`${styles.twoButton} ${styles.copyBlock}`}>
                        <div className={styles.copy}>
                            <div className={styles.square} />
                            <div className={styles.square} />
                        </div>
                        <div>
                            0x123456789aBcDeF1234567890aBcDeF1234567890
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};
